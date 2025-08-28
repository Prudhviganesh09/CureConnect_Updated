import React, { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import axios from 'axios';
import { toast } from 'react-toastify';

const AddDoctor = () => {
	const { aToken, backendUrl } = useContext(AdminContext);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		speciality: '',
		degree: '',
		experience: '',
		about: '',
		fees: '',
		address: {
			line1: '',
			line2: ''
		}
	});
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === 'line1' || name === 'line2') {
			setFormData(prev => ({
				...prev,
				address: {
					...prev.address,
					[name]: value
				}
			}));
		} else {
			setFormData(prev => ({
				...prev,
				[name]: value
			}));
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!imageFile) {
			toast.error('Please select an image');
			return;
		}

		const formDataToSend = new FormData();
		formDataToSend.append('image', imageFile);
		Object.keys(formData).forEach(key => {
			if (key === 'address') {
				formDataToSend.append(key, JSON.stringify(formData[key]));
			} else {
				formDataToSend.append(key, formData[key]);
			}
		});

		try {
			const { data } = await axios.post(
				backendUrl + '/api/admin/add-doctor',
				formDataToSend,
				{
					headers: {
						'aToken': aToken,
						'Content-Type': 'multipart/form-data'
					}
				}
			);

			if (data.success) {
				toast.success(data.message);
				setFormData({
					name: '',
					email: '',
					password: '',
					speciality: '',
					degree: '',
					experience: '',
					about: '',
					fees: '',
					address: {
						line1: '',
						line2: ''
					}
				});
				setImageFile(null);
				setImagePreview(null);
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className="m-5">
			<div className="bg-white p-6 rounded-lg shadow">
				<div className="flex items-center gap-2.5 mb-6">
					<img src={assets.add_icon} alt="" />
					<p className="font-semibold text-xl">Add New Doctor</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Doctor Name
							</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>
							<input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
								minLength={8}
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Speciality
							</label>
							<select
								name="speciality"
								value={formData.speciality}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							>
								<option value="">Select Speciality</option>
								<option value="General physician">General Physician</option>
								<option value="Gynecologist">Gynecologist</option>
								<option value="Dermatologist">Dermatologist</option>
								<option value="Pediatricians">Pediatricians</option>
								<option value="Neurologist">Neurologist</option>
								<option value="Gastroenterologist">Gastroenterologist</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Degree
							</label>
							<input
								type="text"
								name="degree"
								value={formData.degree}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Experience
							</label>
							<input
								type="text"
								name="experience"
								value={formData.experience}
								onChange={handleInputChange}
								placeholder="e.g., 5 Years"
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Fees
							</label>
							<input
								type="number"
								name="fees"
								value={formData.fees}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Address Line 1
							</label>
							<input
								type="text"
								name="line1"
								value={formData.address.line1}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Address Line 2
							</label>
							<input
								type="text"
								name="line2"
								value={formData.address.line2}
								onChange={handleInputChange}
								className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							About Doctor
						</label>
						<textarea
							name="about"
							value={formData.about}
							onChange={handleInputChange}
							rows={4}
							className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Doctor Image
						</label>
						<div className="flex items-center gap-4">
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className="hidden"
								id="image-upload"
							/>
							<label
								htmlFor="image-upload"
								className="cursor-pointer flex items-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-md hover:border-blue-500 transition-colors"
							>
								<img src={assets.upload_area} alt="" className="w-6 h-6" />
								<span>Upload Image</span>
							</label>
							{imagePreview && (
								<img
									src={imagePreview}
									alt="Preview"
									className="w-16 h-16 rounded-full object-cover"
								/>
							)}
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
					>
						Add Doctor
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddDoctor;
