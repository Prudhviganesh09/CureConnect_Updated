import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const chatbotService = {
  // Send a message to the chatbot
  sendMessage: async (message, userId) => {
    try {
      const response = await apiClient.post('/chatbot/chat', {
        message,
        userId
      });
      return response.data;
    } catch (error) {
      console.error('Chatbot API Error:', error);
      throw error;
    }
  },

  // Health check for chatbot service
  checkHealth: async () => {
    try {
      const response = await apiClient.get('/chatbot/health');
      return response.data;
    } catch (error) {
      console.error('Chatbot Health Check Error:', error);
      throw error;
    }
  },

  // Search doctors directly
  searchDoctors: async (speciality, location) => {
    try {
      const params = new URLSearchParams();
      if (speciality) params.append('speciality', speciality);
      if (location) params.append('location', location);
      
      const response = await apiClient.get(`/chatbot/doctors?${params}`);
      return response.data;
    } catch (error) {
      console.error('Doctor Search Error:', error);
      throw error;
    }
  }
};

export default chatbotService;
