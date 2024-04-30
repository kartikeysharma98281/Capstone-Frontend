import { useEffect } from "react";
import {
	Routes,
	Route,
	useNavigationType,
	useLocation,
} from "react-router-dom";
import JOBS from "./pages/JOBS";
import SplashScreen from "./components/SplashScreen";
import BasicDetailsSeeker from "./details/BasicDetailsSeeker";
import SkillsAndProjectsSeeker from "./details/SkillsAndProjectsSeeker";
import Educationseeker from "./details/EducationSeeker";
import ResumeAndPortfolioSeeker from "./details/ResumeAndPortfolioSeeker";
import LoginJobs from "./pages/LoginJobs";
import JobsDetails from "./pages/JobsDetails";
import HiringProfile from "./hiring/HiringProfile";
import JobPosting from "./hiring/JobPosting";
import CandidateDashboard from "./components/CandidateDashboard";
import RoleOptions from "./components/RoleOptions";
import CompanyDashboard from "./components/CompanyDashboard";
import JobCard from "./components/JobCard";
import { UserProvider } from "./UserContext";

import QuizCSS from "./tests/components/QuizCSS";
import Home from "./tests/Home";
import QuizJava from "./tests/components/QuizJava";
import QuizPython from "./tests/components/QuizPython";
import QuizJavaScript from "./tests/components/QuizJavaScript";
import QuizReactJs from "./tests/components/QuizReactJs";
import QuizNodeJs from "./tests/components/QuizNodeJs";
import QuizCpp from "./tests/components/QuizCpp";
import QuizSQL from "./tests/components/QuizSQL";
import QuizPytorch from "./tests/components/QuizPytorch";

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		if (action !== "POP") {
			window.scrollTo(0, 0);
		}
	}, [action, pathname]);

	useEffect(() => {
		let title = "";
		let metaDescription = "";

		switch (pathname) {
			case "/":
				title = "";
				metaDescription = "";
				break;
		}

		if (title) {
			document.title = title;
		}

		if (metaDescription) {
			const metaDescriptionTag = document.querySelector(
				'head > meta[name="description"]'
			);
			if (metaDescriptionTag) {
				metaDescriptionTag.content = metaDescription;
			}
		}
	}, [pathname]);

	return (
		<UserProvider>
			<Routes>
				<Route
					path="/"
					element={<SplashScreen />}
				/>
				<Route
					path="/jobs"
					element={<JOBS />}
				/>
				<Route
					path="/basic-details-seeker"
					element={<BasicDetailsSeeker />}
				/>
				<Route
					path="/educationseeker"
					element={<Educationseeker />}
				/>
				<Route
					path="/skills-and-projects-seeker"
					element={<SkillsAndProjectsSeeker />}
				/>
				<Route
					path="/resume-and-portfolio-seeker"
					element={<ResumeAndPortfolioSeeker />}
				/>
				<Route
					path="/login-jobs"
					element={<LoginJobs />}
				/>
				<Route
					path="/job-details"
					element={<JobsDetails />}
				/>
				<Route
					path="/job-posting"
					element={<JobPosting />}
				/>
				<Route
					path="/hiring-profile"
					element={<HiringProfile />}
				/>
				<Route
					path="/candidate-dashboard"
					element={<CandidateDashboard />}
				/>
				<Route
					path="/role-options"
					element={<RoleOptions />}
				/>
				<Route
					path="/company-dashboard"
					element={<CompanyDashboard />}
				/>
				<Route
					path="/job-card"
					element={<JobCard />}
				/>
				<Route
					path="/test"
					element={<Home />}
				/>
				<Route
					path="/QuizCSS"
					element={<QuizCSS />}
				/>
				<Route
					path="/QuizJava"
					element={<QuizJava />}
				/>
				<Route
					path="/QuizPython"
					element={<QuizPython />}
				/>
				<Route
					path="/QuizJavaScript"
					element={<QuizJavaScript />}
				/>
				<Route
					path="/QuizReactJs"
					element={<QuizReactJs />}
				/>
				<Route
					path="/QuizNodeJs"
					element={<QuizNodeJs />}
				/>
				<Route
					path="/QuizCpp"
					element={<QuizCpp />}
				/>
				<Route
					path="/QuizSQL"
					element={<QuizSQL />}
				/>
				<Route
					path="/QuizPytorch"
					element={<QuizPytorch />}
				/>
			</Routes>
		</UserProvider>
	);
}
export default App;
