import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";

const DoctorsList = () => {
	const { aToken, doctors, getAllDoctors, changeAvailability } =
		useContext(AdminContext);

	useEffect(() => {
		if (aToken) {
			getAllDoctors();
		}
	}, [aToken]);

	return (
		<div className="m-5">
			<div className="bg-white">
				<div className="flex items-center gap-2.5 px-4 py-4 rounded-t border">
					<img src={assets.people_icon} alt="" />
					<p className="font-semibold">All Doctors</p>
				</div>
				<div className="pt-4 border border-t-0">
					{doctors.map((doctor, index) => (
						<div
							className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
							key={index}
						>
							<img
								className="rounded-full w-10"
								src={doctor.image}
								alt=""
							/>
							<div className="flex-1 text-sm">
								<p className="text-gray-800 font-medium">
									{doctor.name}
								</p>
								<p className="text-gray-600">
									{doctor.speciality} - {doctor.degree}
								</p>
								<p className="text-gray-500 text-xs">
									{doctor.email}
								</p>
							</div>
							<button
								onClick={() => changeAvailability(doctor._id)}
								className={`px-3 py-1 rounded-full text-xs font-medium ${
									doctor.available
										? 'bg-green-100 text-green-800'
										: 'bg-red-100 text-red-800'
								}`}
							>
								{doctor.available ? 'Available' : 'Unavailable'}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DoctorsList;
