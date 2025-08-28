import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import doctorModel from '../models/doctorModel.js';

const router = express.Router();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Healthcare-focused system prompt
const systemPrompt = `You are CureConnect, a helpful healthcare assistant for our medical platform. You help users with:

1. **Appointment Booking**: Guide users through booking appointments with doctors
2. **Doctor Information**: Provide details about doctors, specialties, and availability
3. **Platform Help**: Assist with account management, profile updates, and general platform usage
4. **Healthcare Guidance**: Offer general health information and wellness tips
5. **Technical Support**: Help with login issues, payment problems, or app navigation

IMPORTANT GUIDELINES:
- You are specifically for the CureConnect platform, not a general healthcare assistant
- When users ask about finding doctors, guide them to use the platform's search features
- For appointment booking, direct them to the appointment booking process on the website
- If users need medical advice, always recommend consulting with healthcare professionals
- Keep responses concise, friendly, and actionable
- Suggest using the platform's features rather than providing generic healthcare information
- If you don't know specific platform details, suggest checking the website or contacting support
- Format your responses with clear bullet points and sections for better readability
- Use friendly, conversational tone while being professional

Example responses:
- "To find a doctor on CureConnect, you can use our search feature on the Doctors page. You can filter by specialty, location, and availability."
- "To book an appointment, visit the doctor's profile page and click the 'Book Appointment' button."
- "For platform-related issues, please check our Help section or contact our support team."

RESPONSE FORMATTING:
- Use bullet points (•) for lists
- Keep paragraphs short and readable
- Use clear section headers when appropriate
- Avoid bold formatting - keep text simple and clean`;

// Chat history storage (in production, use a database)
const chatHistory = new Map();

router.post('/chat', async (req, res) => {
    try {
        const { message, userId } = req.body;
        
        if (!message || !message.trim()) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Check if user is asking about finding doctors
        const isDoctorSearch = /find|search|look for|recommend|suggest|good|best|general physician|doctor/i.test(message);
        
        let doctorRecommendations = null;
        
        if (isDoctorSearch) {
            try {
                // Search for doctors based on the message
                let searchQuery = {};
                
                // Extract specialty from message
                if (message.toLowerCase().includes('general physician') || message.toLowerCase().includes('general practitioner')) {
                    searchQuery.speciality = { $regex: /general|physician|practitioner/i };
                } else if (message.toLowerCase().includes('cardiologist')) {
                    searchQuery.speciality = { $regex: /cardio/i };
                } else if (message.toLowerCase().includes('dermatologist')) {
                    searchQuery.speciality = { $regex: /derma/i };
                } else if (message.toLowerCase().includes('orthopedic')) {
                    searchQuery.speciality = { $regex: /ortho/i };
                } else if (message.toLowerCase().includes('pediatrician')) {
                    searchQuery.speciality = { $regex: /pediatric/i };
                }
                
                // Add availability filter
                searchQuery.available = true;
                
                // Get doctors from database
                const doctors = await doctorModel.find(searchQuery)
                    .select(['name', 'speciality', 'experience', 'fees', 'address', 'degree', 'about'])
                    .limit(5);
                
                if (doctors.length > 0) {
                    doctorRecommendations = doctors.map(doc => ({
                        name: doc.name,
                        speciality: doc.speciality,
                        experience: doc.experience,
                        fees: doc.fees,
                        degree: doc.degree,
                        location: doc.address?.city || 'Location not specified'
                    }));
                }
            } catch (dbError) {
                console.error('Database search error:', dbError);
            }
        }

        // Get or create chat history for user
        if (!chatHistory.has(userId)) {
            chatHistory.set(userId, []);
        }
        const userHistory = chatHistory.get(userId);

        // Initialize the model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Prepare conversation history
        const conversationHistory = [
            { role: "user", parts: [{ text: systemPrompt }] },
            { role: "model", parts: [{ text: "Hello! I'm CureConnect, your healthcare assistant. How can I help you today?" }] },
            ...userHistory
        ];

        // Add current message
        conversationHistory.push({ role: "user", parts: [{ text: message }] });

        // Generate response
        const chat = model.startChat({
            history: conversationHistory,
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.7,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        let responseText = response.text();

        // If we have doctor recommendations, enhance the response
        if (doctorRecommendations && doctorRecommendations.length > 0) {
            responseText += '\n\nHere are some doctors I found for you:\n\n';
            doctorRecommendations.forEach((doc, index) => {
                responseText += `${index + 1}. Dr. ${doc.name}\n`;
                responseText += `   Speciality: ${doc.speciality}\n`;
                responseText += `   Experience: ${doc.experience}\n`;
                responseText += `   Fees: $${doc.fees}\n`;
                responseText += `   Location: ${doc.location}\n\n`;
            });
            responseText += 'To book an appointment with any of these doctors, visit their profile page on our website.';
        }

        // Update chat history
        userHistory.push(
            { role: "user", parts: [{ text: message }] },
            { role: "model", parts: [{ text: responseText }] }
        );

        // Keep only last 10 messages to manage memory
        if (userHistory.length > 20) {
            userHistory.splice(0, 10);
        }

        res.json({
            success: true,
            response: responseText,
            timestamp: new Date().toISOString(),
            doctorRecommendations: doctorRecommendations
        });

    } catch (error) {
        console.error('Chatbot error:', error);
        res.status(500).json({
            error: 'Failed to process message',
            details: error.message
        });
    }
});

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: 'Chatbot service is running' });
});

// Doctor search endpoint
router.get('/doctors', async (req, res) => {
    try {
        const { speciality, location } = req.query;
        
        let searchQuery = { available: true };
        
        if (speciality) {
            searchQuery.speciality = { $regex: speciality, $options: 'i' };
        }
        
        if (location) {
            searchQuery['address.city'] = { $regex: location, $options: 'i' };
        }
        
        const doctors = await doctorModel.find(searchQuery)
            .select(['name', 'speciality', 'experience', 'fees', 'address', 'degree', 'about'])
            .limit(10);
        
        res.json({
            success: true,
            doctors: doctors,
            count: doctors.length
        });
        
    } catch (error) {
        console.error('Doctor search error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to search doctors',
            details: error.message
        });
    }
});

export default router;
