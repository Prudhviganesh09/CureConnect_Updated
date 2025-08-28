import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const AdminSidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <aside className="min-h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center mb-8">
          <img
            src={assets.logo_cure_connect_red}
            alt="CureConnect Admin"
            className="w-10 h-10"
          />
          <span className="ml-3 text-xl font-bold text-gray-900">
            Admin Panel
          </span>
        </div>
      </div>

      {/* Navigation (Scrollable) */}
      <nav className="px-4 flex-1 overflow-y-auto">
        {aToken && (
          <ul className="space-y-2">
            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/admin-dashboard"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.home_icon}
                      alt="Dashboard"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Dashboard</span>
                </>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/all-appointments"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.appointment_icon}
                      alt="Appointments"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Appointments</span>
                </>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/add-doctor"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.add_icon}
                      alt="Add Doctor"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Add Doctor</span>
                </>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/doctor-list"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.people_icon}
                      alt="Doctors List"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Doctors List</span>
                </>
              )}
            </NavLink>
          </ul>
        )}

        {dToken && (
          <ul className="space-y-2">
            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/doctor-dashboard"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.home_icon}
                      alt="Dashboard"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Dashboard</span>
                </>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/doctor-appointments"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.appointment_icon}
                      alt="Appointments"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Appointments</span>
                </>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
              `}
              to={"/doctor-profile"}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100"
                        : "bg-gray-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={assets.people_icon}
                      alt="Profile"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="hidden md:block">Profile</span>
                </>
              )}
            </NavLink>
          </ul>
        )}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-sm">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <p className="text-sm font-semibold text-gray-900 truncate">
              Admin User
            </p>
            <p className="text-xs text-blue-600 font-medium truncate">
              Administrator
            </p>
          </div>
          <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
