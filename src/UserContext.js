// contexts/UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		date: new Date(),
		contact: "",
		city: "",
		email: "",
		disc: "",
	});

	const [educationInfo, setEducationInfo] = useState({
		tenth: {
			name: "",
			city: "",
			year: "",
			title: "",
			board: "",
			percentage: "",
		},
		twelfth: {
			name: "",
			city: "",
			year: "",
			title: "",
			board: "",
			percentage: "",
		},
		college: {
			name: "",
			city: "",
			year: "",
			title: "",
			board: "",
			percentage: "",
		},
	});

	const [projects, setProjects] = useState([
		{ title: "", role: "", disc: "", link: "" },
		{ title: "", role: "", disc: "", link: "" },
		{ title: "", role: "", disc: "", link: "" },
	]);

	const [skills, setSkills] = useState([]);

	const [portfolio, setPortfolio] = useState({ link: "" });

	return (
		<UserContext.Provider
			value={{
				userInfo,
				setUserInfo,
				educationInfo,
				setEducationInfo,
				projects,
				setProjects,
				skills,
				setSkills,
				portfolio,
				setPortfolio,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);
