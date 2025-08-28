import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const AllAppointments = () => {
	const { aToken, appointments, getAllAppointments, cancelAppointment } =
		useContext(AdminContext);
	const { slotDateFormat } = useContext(AppContext);

	useEffect(() => {
		if (aToken) {
			getAllAppointments();
		}
	}, [aToken]);

	return (
		<div className="m-5">
			<div className="bg-white">
				<div className="flex items-center gap-2.5 px-4 py-4 rounded-t border">
					<img src={assets.appointments_icon} alt="" />
					<p className="font-semibold">All Appointments</p>
				</div>
				<div className="pt-4 border border-t-0">
					{appointments.map((item, index) => (
						<div
							className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
							key={index}
						>
							<img
								className="rounded-full w-10"
								src={item.docData.image}
								alt=""
							/>
							<div className="flex-1 text-sm">
								<p className="text-gray-800 font-medium">
									{item.docData.name}
								</p>
								<p className="text-gray-600">
									{slotDateFormat(item.slotDate)}
								</p>
								<p className="text-gray-500 text-xs">
									{item.userData.name} - {item.userData.email}
								</p>
							</div>
							{item.cancelled ? (
								<p className="text-red-400 text-sm font-medium">Cancelled</p>
							) : item.isCompleted ? (
								<p className="text-green-500 text-sm font-medium">
									Completed
								</p>
							) : (
								<img
									onClick={() => cancelAppointment(item._id)}
									className="w-10 cursor-pointer"
									src={assets.cancel_icon}
									alt=""
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllAppointments;
