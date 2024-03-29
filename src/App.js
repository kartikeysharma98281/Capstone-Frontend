import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import JOBS from "./pages/JOBS";
import SplashScreen from "./components/SplashScreen";
import BasicDetailsSeeker from "./details/BasicDetailsSeeker"
import SkillsAndProjectsSeeker from "./details/SkillsAndProjectsSeeker"
import Educationseeker from "./details/EducationSeeker";
import ResumeAndPortfolioSeeker from "./details/ResumeAndPortfolioSeeker";
import LoginJobs from "./pages/LoginJobs";
import JobsDetails from "./pages/JobsDetails"
import HiringProfile from "./hiring/HiringProfile";
import JobPosting from "./hiring/JobPosting";

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
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/jobs" element={<JOBS />} />
      <Route path='/basic-details-seeker' element={<BasicDetailsSeeker />} />
      <Route path="/educationseeker" element={<Educationseeker />} />
      <Route path="/skills-and-projects-seeker" element={<SkillsAndProjectsSeeker />} />
      <Route path="/resume-and-portfolio-seeker" element={<ResumeAndPortfolioSeeker />} />
      <Route path="/login-jobs" element={<LoginJobs />} />
      <Route path="/job-details" element={<JobsDetails />} />
      <Route path="/job-posting" element={<JobPosting />} />
      <Route path="/hiring-profile" element={<HiringProfile />} />
    </Routes>
  );
}
export default App;
