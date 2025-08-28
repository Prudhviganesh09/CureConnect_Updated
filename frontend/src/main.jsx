import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/AppContext.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import DoctorContextProvider from "./context/DoctorContext.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AppContextProvider>
			<AdminContextProvider>
				<DoctorContextProvider>
					<App />
				</DoctorContextProvider>
			</AdminContextProvider>
		</AppContextProvider>
	</BrowserRouter>
);
