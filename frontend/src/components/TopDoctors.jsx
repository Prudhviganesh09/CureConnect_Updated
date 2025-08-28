import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate();
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Top Doctors to Book
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-12">
          {doctors.slice(0,10).map((item, index) => (
            <div 
              onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary/30 overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 hover:from-primary/5 hover:to-primary/10" 
              key={index}
            >
              {/* Doctor Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={item.image} 
                  alt={item.name} 
                />
                {/* Availability Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                    item.available 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    {item.available ? "Available" : "Not Available"}
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-all duration-500">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-medium">
                  {item.speciality}
                </p>
                
                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-primary/10 to-primary/20 text-primary font-bold py-3 px-4 rounded-xl hover:from-primary hover:to-primary/90 hover:text-white transition-all duration-500 text-sm shadow-md hover:shadow-lg">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button 
            onClick={() => {navigate('/doctors'); scrollTo(0,0)}} 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white font-bold px-10 py-5 rounded-full hover:from-primary/90 hover:to-primary hover:shadow-2xl transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-primary/30 shadow-xl"
          >
            View All Doctors
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopDoctors
