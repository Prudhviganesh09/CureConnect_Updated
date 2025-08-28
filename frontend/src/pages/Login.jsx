import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Login = () => {
	const { token, setToken, backendUrl } = useContext(AppContext);
	const [state, setState] = useState("Sign Up");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			if (state === "Sign Up") {
				const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
				if (data.success) {
					localStorage.setItem('token', data.token);
					setToken(data.token);
					toast.success("User Signed up successfully")
				} else {
					toast.error(data.message);
				}
			} else {
				const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
				if (data.success) {
					localStorage.setItem('token', data.token);
					setToken(data.token);
					toast.success("User logged in successfully")
				} else {
					toast.error(data.message);
				}
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (token) {
			navigate('/')
		}
	}, [token])

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center px-4">
			<div className="max-w-md w-full">
				{/* Logo and Header */}
				<div className="text-center mb-8">
					<img 
						src={assets.logo_cure_connect_red} 
						alt="CureConnect" 
						className="w-16 h-16 mx-auto mb-4"
					/>
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						{state === "Sign Up" ? "Create Account" : "Welcome Back"}
					</h1>
					<p className="text-gray-600">
						{state === "Sign Up" ? "Join CureConnect to book appointments" : "Sign in to your account"}
					</p>
				</div>

				{/* Form Card */}
				<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
					<form onSubmit={onSubmitHandler} className="space-y-6">
						{state === "Sign Up" && (
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Full Name
								</label>
								<input
									className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
									type="text"
									onChange={(e) => setName(e.target.value)}
									value={name}
									placeholder="Enter your full name"
									required
								/>
							</div>
						)}

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input
								className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder="Enter your email"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>
							<input
								className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder="Enter your password"
								required
							/>
						</div>

						<button 
							type="submit" 
							disabled={isLoading}
							className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-xl hover:bg-primary/90 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isLoading ? (
								<div className="flex items-center justify-center gap-2">
									<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
									{state === "Sign Up" ? "Creating Account..." : "Signing In..."}
								</div>
							) : (
								state === "Sign Up" ? "Create Account" : "Sign In"
							)}
						</button>
					</form>

					{/* Toggle Form Type */}
					<div className="mt-6 text-center">
						<p className="text-gray-600">
							{state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}
							<button
								onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
								className="ml-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
							>
								{state === "Sign Up" ? "Sign In" : "Sign Up"}
							</button>
						</p>
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-8">
					<p className="text-sm text-gray-500">
						By continuing, you agree to our{" "}
						<a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
						and{" "}
						<a href="#" className="text-primary hover:underline">Privacy Policy</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
