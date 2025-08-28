import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20" id='speciality'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Find by Speciality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
          </p>
        </div>

        {/* Speciality Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {specialityData.map((item, index) => (
            <Link 
              onClick={() => scrollTo(0,0)}  
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-primary/30 cursor-pointer min-h-[160px] sm:min-h-[180px] md:min-h-[200px] bg-gradient-to-br from-white to-gray-50/50 hover:from-primary/5 hover:to-primary/10" 
              to={`/doctors/${item.speciality}`} 
              key={index}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 p-3 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-primary/20 group-hover:to-primary/10 rounded-2xl transition-all duration-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg">
                <img 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 filter group-hover:drop-shadow-lg" 
                  src={item.image} 
                  alt={item.speciality} 
                />
              </div>
              
              {/* Text Container */}
              <div className="text-center flex-1 flex items-center justify-center">
                <p className="text-sm md:text-base font-bold text-gray-700 group-hover:text-primary transition-all duration-500 leading-tight">
                  {item.speciality}
                </p>
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default SpecialityMenu
