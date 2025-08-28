import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl mx-4 md:mx-10 lg:mx-20 my-16 md:my-20 shadow-2xl border border-white/20">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-60">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
			</div>
			
			{/* Animated Background Elements */}
			<div className="absolute top-0 right-0 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
			<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
			
			{/* Floating Particles */}
			<div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
			<div className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
			<div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
			<div className="absolute bottom-20 right-20 w-1 h-1 bg-white/35 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
			
			{/* Main Content Container */}
			<div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[450px] lg:min-h-[550px] px-6 md:px-12 lg:px-16 xl:px-20">
				{/* Left Content */}
				<div className="flex-1 text-center lg:text-left lg:pr-12 xl:pr-16 py-12 lg:py-0">
					{/* Main Heading */}
					<h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
						Book Appointment <br />
						<span className="text-white/90 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">With 100+ Trusted Doctors</span>
					</h2>
					
					{/* Description */}
					<p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
						Experience seamless healthcare with our network of verified medical professionals. 
						Your health journey starts here with trusted care.
					</p>
					
					{/* CTA Button */}
					<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
						<button 
							onClick={() => {navigate('/login'); scrollTo(0,0)}} 
							className="group inline-flex items-center gap-3 bg-white text-primary font-black px-12 py-6 rounded-full hover:bg-gray-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg shadow-xl border-2 border-white/20"
						>
							<span>Create Account</span>
							<svg className="w-6 h-6 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</button>
						
						{/* Trust Indicators */}
						<div className="flex items-center gap-6 text-white/95 text-sm">
							<div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-6 py-3 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
								<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								<span className="font-bold">Verified Doctors</span>
							</div>
							<div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl rounded-full px-6 py-3 shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
								<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
								<svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
								<span className="font-bold">24/7 Support</span>
							</div>
						</div>
					</div>
					
					{/* Stats Row */}
					<div className="flex items-center justify-center lg:justify-start gap-8 mt-8">
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-black text-white">100+</div>
							<div className="text-white/80 text-sm font-medium">Expert Doctors</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-black text-white">10k+</div>
							<div className="text-white/80 text-sm font-medium">Happy Patients</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-black text-white">99%</div>
							<div className="text-white/80 text-sm font-medium">Success Rate</div>
						</div>
					</div>
				</div>
				
				{/* Right Image Section */}
				<div className="flex-1 lg:flex lg:justify-end w-full lg:w-auto mt-8 lg:mt-0">
					<div className="relative max-w-lg mx-auto lg:mx-0">
						{/* Decorative Background Elements */}
						<div className="absolute -top-8 -right-8 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
						<div className="absolute top-1/2 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
						
						{/* Main Image */}
						<div className="relative z-10">
							<img 
								className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-700" 
								src={assets.appointment_img} 
								alt="Appointment Booking" 
							/>
							
							{/* Floating Stats Card */}
							<div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
								<div className="flex items-center gap-4">
									<div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shadow-lg">
										<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<div>
										<p className="text-sm font-black text-gray-900">Quick Booking</p>
										<p className="text-xs text-gray-600 font-bold">Under 2 minutes</p>
									</div>
								</div>
							</div>
							
							{/* Success Rate Badge */}
							<div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-xl p-3 border border-green-400/30 hover:scale-110 transition-transform duration-300">
								<div className="flex items-center gap-2">
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
									<span className="text-xs font-black">99% Success</span>
								</div>
							</div>
							
							{/* Live Badge */}
							<div className="absolute top-4 left-4 bg-red-500 text-white rounded-full shadow-xl px-3 py-1 border border-red-400/30">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
									<span className="text-xs font-bold">LIVE</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Bottom Wave Effect */}
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
			
			{/* Corner Decorations */}
			<div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-white/30 rounded-tl-3xl"></div>
			<div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-white/30 rounded-tr-3xl"></div>
			<div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-white/30 rounded-bl-3xl"></div>
			<div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-white/30 rounded-br-3xl"></div>
		</section>
	);
};

export default Banner;
