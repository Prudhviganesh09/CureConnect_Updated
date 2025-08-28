import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
const Navbar = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const { token, setToken, userData } = useContext(AppContext);

	const logout = (event) => {

		setToken(false)
		localStorage.removeItem('token')
	}
	return (
		<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<img
							onClick={() => navigate("/")}
							className="w-12 h-12 cursor-pointer hover:scale-110 transition-all duration-300 filter drop-shadow-lg"
							src={assets.logo_cure_connect_red}
							alt="CureConnect Logo"
						/>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<NavLink to="/" className="group relative">
							<li className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/5">HOME</li>
							<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-500 rounded-full"></div>
						</NavLink>
						<NavLink to="/doctors" className="group relative">
							<li className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/5">ALL DOCTORS</li>
							<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-500 rounded-full"></div>
						</NavLink>
						<NavLink to="/about" className="group relative">
							<li className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/5">ABOUT</li>
							<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-500 rounded-full"></div>
						</NavLink>
						<NavLink to="/contact" className="group relative">
							<li className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/5">CONTACT</li>
							<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-500 rounded-full"></div>
						</NavLink>
					</div>

					{/* User Actions */}
					<div className="flex items-center space-x-4">
						{/* Admin Login Link */}
						<NavLink to="/admin-login" className="hidden md:inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-all duration-300">
							Admin Login
						</NavLink>
						
						{token && userData ? (
							<div className="flex items-center gap-3 cursor-pointer group relative">
								<div className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary/10 hover:to-primary/20 rounded-full px-4 py-2 transition-all duration-300 shadow-md hover:shadow-lg">
									<img className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300" src={assets.profile_pic} alt="Profile" />
									<img className="w-3 h-3 transition-transform group-hover:rotate-180 duration-300" src={assets.dropdown_icon} alt="Dropdown" />
								</div>
								<div className="absolute top-full right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform scale-95 group-hover:scale-100">
									<div className="py-3">
										<div onClick={() => navigate("/my-profile")} className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:text-primary transition-all duration-200 cursor-pointer rounded-lg mx-2">
											<span className="text-sm font-semibold">My Profile</span>
										</div>
										<div onClick={() => navigate("/my-appointments")} className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:text-primary transition-all duration-200 cursor-pointer rounded-lg mx-2">
											<span className="text-sm font-semibold">My Appointments</span>
										</div>
										<hr className="my-2 border-gray-200/50" />
										<div onClick={logout} className="flex items-center px-4 py-3 text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200 cursor-pointer rounded-lg mx-2">
											<span className="text-sm font-semibold">Logout</span>
										</div>
									</div>
								</div>
							</div>
						) : (
							<button 
								onClick={() => navigate("/login")} 
								className="hidden md:inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
							>
								Create Account
							</button>
						)}

						{/* Mobile menu button */}
						<button
							onClick={() => setShowMenu(true)}
							className="md:hidden inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-300 shadow-md hover:shadow-lg"
						>
							<img className="w-6 h-6" src={assets.menu_icon} alt="Menu" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`${showMenu ? "fixed inset-0 z-50" : "hidden"} md:hidden`}>
				<div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMenu(false)}></div>
				<div className="fixed right-0 top-0 h-full w-80 max-w-full bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out">
					<div className="flex items-center justify-between p-6 border-b border-gray-200/50">
						<img className="w-10 h-10" src={assets.logo_cure_connect_red} alt="Logo" />
						<button
							onClick={() => setShowMenu(false)}
							className="p-3 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg"
						>
							<img className="w-6 h-6" src={assets.cross_icon} alt="Close" />
						</button>
					</div>
					<nav className="px-6 py-8">
						<div className="space-y-4">
							<NavLink onClick={() => setShowMenu(false)} to="/" className="block">
								<div className="px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200 text-lg font-semibold text-gray-700 hover:text-primary shadow-sm hover:shadow-md">
									HOME
								</div>
							</NavLink>
							<NavLink onClick={() => setShowMenu(false)} to="/doctors" className="block">
								<div className="px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200 text-lg font-semibold text-gray-700 hover:text-primary shadow-sm hover:shadow-md">
									ALL DOCTORS
								</div>
							</NavLink>
							<NavLink onClick={() => setShowMenu(false)} to="/about" className="block">
								<div className="px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200 text-lg font-semibold text-gray-700 hover:text-primary shadow-sm hover:shadow-md">
									ABOUT
								</div>
							</NavLink>
							<NavLink onClick={() => setShowMenu(false)} to="/contact" className="block">
								<div className="px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200 text-lg font-semibold text-gray-700 hover:text-primary shadow-sm hover:shadow-md">
									CONTACT US
								</div>
							</NavLink>
						</div>
						{!token && (
							<div className="mt-8 pt-6 border-t border-gray-200/50">
								<button 
									onClick={() => {navigate("/login"); setShowMenu(false)}} 
									className="w-full px-6 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
								>
									Create Account
								</button>
							</div>
						)}
						
						{/* Admin Login in Mobile Menu */}
						<div className="mt-4 pt-4 border-t border-gray-200/50">
							<button 
								onClick={() => {navigate("/admin-login"); setShowMenu(false)}} 
								className="w-full px-6 py-3 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
							>
								Admin Login
							</button>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
