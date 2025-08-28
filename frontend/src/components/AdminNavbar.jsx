import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { assets } from "../assets/assets";

const AdminNavbar = () => {
	const { setAToken } = useContext(AdminContext);
	const { setDToken } = useContext(DoctorContext);

	const handleLogout = () => {
		localStorage.removeItem('aToken');
		localStorage.removeItem('dToken');
		setAToken('');
		setDToken('');
	};

	return (
		<nav className="bg-white border-b border-gray-200 px-4 py-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img 
						src={assets.logo_cure_connect_red} 
						alt="CureConnect" 
						className="w-8 h-8"
					/>
					<span className="text-xl font-bold text-gray-900">CureConnect Admin</span>
				</div>
				
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
							<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						<span className="text-sm font-medium text-gray-700">Admin</span>
					</div>
					
					<button
						onClick={handleLogout}
						className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
					>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default AdminNavbar;
