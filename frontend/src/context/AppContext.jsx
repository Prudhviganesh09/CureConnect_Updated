import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
	const currencySymbol = "$";

	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	// Function to format slot date
	const slotDateFormat = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	const [doctors, setDoctors] = useState([]);
	const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') :false);
	const [userData,setUserData] = useState(false)


	const getDoctorsData = async () => {
		try {
			const { data } = await axios.get(backendUrl + "/api/doctor/list");
			if (data.success) {
				setDoctors(data.doctors);
				// toast.success("Doctors list available")
			} else {
				toast.error(error.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	const loadUserProfileData = async()=>{
		try {
			const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})
			if(data.success){
				setUserData(data.userData)
			}else{
				toast.error(data.message)
			}
			
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	}

	const value = {
		doctors,
		getDoctorsData,
		currencySymbol,
		token,
		setToken,
        backendUrl,
		userData,
		setUserData,
		loadUserProfileData,
		slotDateFormat,
	};

	useEffect(() => {
		getDoctorsData();
	}, []);

	useEffect(() => {
		if(token){
			loadUserProfileData();
		}else{
			setUserData(false)
		}
	}, [token]);


	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export default AppContextProvider;
