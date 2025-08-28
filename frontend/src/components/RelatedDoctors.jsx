import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality }) => {
    const { doctors } = useContext(AppContext)
    const navigate = useNavigate();

    // Filter doctors by speciality
    const relatedDoctors = doctors.filter(doctor => 
        doctor.speciality.toLowerCase() === speciality.toLowerCase()
    ).slice(0, 4);

    if (relatedDoctors.length === 0) return null;

    return (
        <section className="py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Related {speciality} Doctors
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover more qualified {speciality.toLowerCase()} specialists in your area
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedDoctors.map((doctor, index) => (
                        <div 
                            key={doctor._id}
                            onClick={() => {navigate(`/appointment/${doctor._id}`); scrollTo(0,0)}} 
                            className="group bg-white rounded-2xl shadow-soft hover:shadow-medium border border-gray-100 hover:border-primary/20 overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Doctor Image */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                    src={doctor.image} 
                                    alt={doctor.name} 
                                />
                                {/* Availability Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                                        doctor.available 
                                            ? 'bg-green-100 text-green-700 border border-green-200' 
                                            : 'bg-red-100 text-red-700 border border-red-200'
                                    }`}>
                                        <div className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        {doctor.available ? "Available" : "Not Available"}
                                    </div>
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                                    {doctor.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {doctor.speciality}
                                </p>
                                
                                {/* Action Button */}
                                <button className="w-full bg-primary/10 text-primary font-medium py-2.5 px-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 text-sm">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button 
                        onClick={() => {navigate(`/doctors/${speciality}`); scrollTo(0,0)}} 
                        className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20"
                    >
                        View All {speciality} Doctors
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RelatedDoctors
