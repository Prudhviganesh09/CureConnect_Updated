import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
	const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '');
	const [doctorData, setDoctorData] = useState({})
	const [appointments, setAppointments] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

	const getDoctorData = async() => {
		try {
			const {data} = await axios.get(backendUrl + '/api/doctor/profile', {headers:{dToken}})
			if(data.success){
				setDoctorData(data.doctorData)
			}
			else{
				toast.error(data.message)
			}
		} catch (error) {
			toast.error(error.message)
		}
	}

	const getDoctorAppointments = async() => {
		try {
			const {data} = await axios.get(backendUrl + '/api/doctor/appointments', {headers:{dToken}})
			if(data.success){
				setAppointments(data.appointments)
			}
			else{
				toast.error(data.message)
			}
		} catch (error) {
			toast.error(error.message)
		}
	}

	const value = {
		dToken, setDToken,
		doctorData, getDoctorData,
		appointments, getDoctorAppointments
	};

	return (
		<DoctorContext.Provider value={value}>
			{props.children}
		</DoctorContext.Provider>
	);
};

export default DoctorContextProvider;
