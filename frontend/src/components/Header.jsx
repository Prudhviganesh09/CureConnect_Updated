import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl mx-4 md:mx-10 lg:mx-20 my-8 md:my-12 shadow-2xl">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-50">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:30px_30px]"></div>
			</div>
			
			{/* Animated Background Elements */}
			<div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
			
			<div className="relative flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[600px] px-6 md:px-12 lg:px-20">
				{/* Left Content */}
				<div className="flex-1 text-center lg:text-left lg:pr-12 py-12 lg:py-0">
					<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
						Book Appointment <br />
						<span className="text-white/90 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">With Trusted Doctors</span>
					</h1>
					
					<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
						<div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-white/20">
							<img className="w-8 h-8 rounded-full ring-2 ring-white/30" src={assets.group_profiles} alt="Trusted Users" />
							<span className="text-white/95 text-sm font-semibold">1000+ Trusted Users</span>
						</div>
						<p className="text-white/85 text-sm md:text-base max-w-md leading-relaxed">
							Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
						</p>
					</div>
					
					<a 
						href="#speciality" 
						className="inline-flex items-center gap-3 bg-white text-primary font-bold px-10 py-5 rounded-full hover:bg-gray-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
					>
						Book Appointment
						<img className="w-5 h-5 transition-transform group-hover:translate-x-1" src={assets.arrow_icon} alt="Arrow" />
					</a>
				</div>
				
				{/* Right Image */}
				<div className="flex-1 relative w-full lg:w-auto">
					<div className="relative">
						{/* Decorative elements */}
						<div className="absolute -top-6 -right-6 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse"></div>
						<div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
						
						<img 
							className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 h-auto rounded-3xl shadow-2xl border-4 border-white/20" 
							src={assets.header_img} 
							alt="Healthcare Professionals" 
						/>
						
						{/* Floating Badge */}
						<div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-white/30">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<span className="text-xs font-semibold text-gray-700">Live</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Bottom wave effect */}
			<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
		</section>
	);
};

export default Header;
