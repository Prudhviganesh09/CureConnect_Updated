import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
// Admin imports
import { AdminContext } from './context/AdminContext'
import { DoctorContext } from './context/DoctorContext'
import AdminNavbar from './components/AdminNavbar'
import AdminSidebar from './components/AdminSidebar'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Admin/Dashboard'
import AllAppointments from './pages/Admin/AllAppointments'
import AddDoctor from './pages/Admin/AddDoctor'
import DoctorsList from './pages/Admin/DoctorsList'


const App = () => {
  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer/>
      <AdminNavbar/>
      <div className="flex items-start">
        <AdminSidebar/>
        <Routes>
          {/* ---------Admin Route-------- */}
          <Route path='/' element={<Navigate to="/admin-dashboard" replace />} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorsList />} />
          <Route path='*' element={<Navigate to="/admin-dashboard" replace />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className='mx-4 sm:ms-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/appointment/:docId' element={<Appointments/>} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
      <Chatbot/>
    </div>
  )
}

export default App
