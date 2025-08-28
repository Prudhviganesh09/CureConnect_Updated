<p align="center">
  <img src="https://github.com/user-attachments/assets/ece2611f-6ccb-4d6d-8bd8-4d62c82703b3" alt="CureConnect Logo" width="200"/>
</p>

# CureConnect

CureConnect is a comprehensive healthcare appointment booking platform that connects patients with doctors. The platform provides a seamless experience for users to browse doctor profiles, check real-time availability, and book appointments with healthcare professionals.

## ✨ Features

### For Patients
- **Browse Doctors**: View detailed doctor profiles including specialization, experience, and qualifications
- **Appointment Booking**: Book, reschedule, or cancel appointments with ease
- **Real-time Availability**: Check doctor availability for the upcoming week
- **User Profile**: Manage personal information and appointment history
- **Chatbot Assistant**: Get instant help with common queries

### For Doctors
- **Profile Management**: Create and manage professional profiles
- **Appointment Management**: View and manage patient appointments
- **Schedule Management**: Set and update availability
- **Patient History**: Access patient medical history and notes

### For Administrators
- **Dashboard**: Overview of platform statistics
- **Doctor Management**: Approve, add, or remove doctors
- **Appointment Monitoring**: View and manage all appointments
- **User Management**: Manage patient and doctor accounts

## 🛠 Tech Stack

### Frontend
- **Framework**: React.js
- **State Management**: Context API
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with responsive design
- **Form Handling**: React Hook Form
- **Notifications**: React Toastify

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary
- **Payment Processing**: Razorpay Integration
- **API Documentation**: RESTful API design

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account (for image storage)
- Razorpay account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CureConnect.git
   cd CureConnect
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the frontend directory with the following variable:
   ```env
   VITE_API_BASE_URL=http://localhost:4000/api
   ```

4. **Start the development servers**
   - In the backend directory:
     ```bash
     npm run dev
     ```
   - In the frontend directory:
     ```bash
     npm run dev
     ```

5. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:4000`

## 📂 Project Structure

```
CureConnect/
├── backend/               # Backend server code
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── server.js         # Main server file
│   └── package.json
│
└── frontend/             # Frontend React application
    ├── public/           # Static files
    └── src/
        ├── assets/       # Images, fonts, etc.
        ├── components/   # Reusable UI components
        ├── context/      # React context providers
        ├── pages/        # Page components
        ├── services/     # API service calls
        ├── App.jsx       # Main app component
        └── main.jsx      # Entry point
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the request header.

## 📝 API Endpoints

### User Routes
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Doctor Routes
- `GET /api/doctor` - Get all doctors
- `GET /api/doctor/:id` - Get doctor by ID
- `GET /api/doctor/specialty/:specialty` - Get doctors by specialty

### Appointment Routes
- `POST /api/appointment` - Book an appointment
- `GET /api/appointment/user` - Get user appointments
- `PUT /api/appointment/:id` - Update appointment
- `DELETE /api/appointment/:id` - Cancel appointment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for providing amazing tools and libraries

<p align="center">
  <img src="https://github.com/user-attachments/assets/dfa3526f-f2c7-4999-879d-449aab91c674" alt="cureconnectlogored" width="200"/>
</p>
