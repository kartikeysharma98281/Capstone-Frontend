import { useState, useCallback, useEffect } from "react";
import SignIn from "../components/SignIn";
import PortalPopup from "../components/PortalPopup";
import LogInPopup from "../components/LogInPopup";
import styles from "./JOBS.module.css";
import JobCard from "../components/JobCard";
import axios from "axios";
import { Link } from "react-router-dom";

const JOBS = () => {
	const [isSignInOpen, setSignInOpen] = useState(false);
	const [isLogInPopupOpen, setLogInPopupOpen] = useState(false);
	const [JobsDetails, setJobsDetails] = useState([]);
	const [keywords, setKeywords] = useState("");
	const [cityRegion, setCityRegion] = useState("");
	const [annualSalary, setAnnualSalary] = useState("");
	const [filteredJobs, setFilteredJobs] = useState([]);

	const openSignIn = useCallback(() => {
		setSignInOpen(true);
	}, []);

	const closeSignIn = useCallback(() => {
		setSignInOpen(false);
	}, []);

	const openLogInPopup = useCallback(() => {
		setLogInPopupOpen(true);
	}, []);

	const closeLogInPopup = useCallback(() => {
		setLogInPopupOpen(false);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log("Working for jobs");
				const response = await axios.get("http://localhost:5000/job-posting");
				setJobsDetails(response.data);
				setFilteredJobs(response.data); // Initially, set filtered jobs to all jobs
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchData();
	}, []);

	const filterJobs = useCallback(() => {
		const filtered = JobsDetails.filter((job) => {
			const matchKeywords =
				!keywords || job.title.toLowerCase().includes(keywords.toLowerCase());
			const matchCityRegion =
				!cityRegion ||
				job.location.toLowerCase().includes(cityRegion.toLowerCase());
			const matchSalary =
				!annualSalary || parseInt(job.monthlyStipend) >= parseInt(annualSalary);
			return matchKeywords && matchCityRegion && matchSalary;
		});
		setFilteredJobs(filtered);
	}, [JobsDetails, keywords, cityRegion, annualSalary]);

	const handleFilterClick = () => {
		filterJobs();
	};

	return (
		<>
			<div
				style={{
					gap: "26px",
					display: "flex",
					flexDirection: "column",
					marginTop: "16%",
				}}
			>
				{filteredJobs.length > 0 ? (
					filteredJobs.map(
						(
							{
								organizationName,
								title,
								location,
								monthlyStipend,
								description,
							},
							index
						) => {
							const jobDate = new Date(); // Assuming this is where you handle job date
							const formattedDate = jobDate.toDateString(); // Convert the Date object to a string
							return (
								<JobCard
									key={index}
									name={organizationName}
									role={title}
									date={formattedDate} // Pass the formatted date string as a prop
									city={location}
									salary={monthlyStipend}
									description={description}
								/>
							);
						}
					)
				) : (
					<div>No jobs available</div>
				)}

				<div className={styles.exploreExcitingCareer}>
					Explore exciting career options!
				</div>
				<div className={styles.header}>
					<div className={styles.headerChild} />
					<div className={styles.bookmarksParent}>
						<img
							className={styles.bookmarksIcon}
							alt=""
							src="/bookmarks@2x.png"
							style={{ cursor: "pointer" }}
						/>
						<img
							className={styles.applicationIcon}
							alt=""
							src="/application@2x.png"
							style={{ cursor: "pointer" }}
						/>
						<img
							className={styles.notificationsIcon}
							alt=""
							src="/notifications@2x.png"
							style={{ cursor: "pointer" }}
						/>
					</div>
					<div className={styles.headerInner}>
						<div className={styles.nexusParent}>
							<div className={styles.nexus}>Nexus</div>
							<div className={styles.groupChild} />
							<div className={styles.work}>Work</div>
						</div>
					</div>
					<div
						className={styles.signUpWrapper}
						onClick={openSignIn}
					>
						<div className={styles.signUp}>Sign up</div>
					</div>
					<div
						className={styles.logInWrapper}
						onClick={openLogInPopup}
					>
						<div className={styles.logIn}>Log in</div>
					</div>
				</div>
				<div className={styles.jobsParent}>
					<div className={styles.jobs1}>
						<Link
							to="/jobs"
							className={styles.lpa}
						>
							Jobs
						</Link>
					</div>
					<div className={styles.jobs1}>
						<Link
							to="/test"
							className={styles.lpa}
						>
							Skill tests
						</Link>
					</div>
					<div className={styles.jobs1}>
						<div className={styles.lpa}>Interviews</div>
					</div>
				</div>
				<div className={styles.filters}>
					<div className={styles.filter}>
						<input
							className={styles.searchByKeywordsParent}
							placeholder="Search by keywords"
							value={keywords}
							onChange={(e) => setKeywords(e.target.value)}
						/>
						<input
							className={styles.cityRegionWrapper}
							placeholder="City/Region"
							value={cityRegion}
							onChange={(e) => setCityRegion(e.target.value)}
						/>
						<input
							className={styles.annualSalaryEg1000000Wrapper}
							placeholder="Annual salary (eg: 1000000)"
							value={annualSalary}
							onChange={(e) => setAnnualSalary(e.target.value)}
						/>
					</div>
					<div
						className={styles.component410}
						style={{ cursor: "pointer" }}
						onClick={handleFilterClick}
						disabled={!keywords && !cityRegion && !annualSalary}
					>
						<div className={styles.lpa}>Filter</div>
					</div>
				</div>
			</div>
			{isSignInOpen && (
				<PortalPopup
					overlayColor="rgba(113, 113, 113, 0.3)"
					placement="Centered"
					onOutsideClick={closeSignIn}
				>
					<SignIn onClose={closeSignIn} />
				</PortalPopup>
			)}
			{isLogInPopupOpen && (
				<PortalPopup
					overlayColor="rgba(113, 113, 113, 0.3)"
					placement="Centered"
					onOutsideClick={closeLogInPopup}
				>
					<LogInPopup onClose={closeLogInPopup} />
				</PortalPopup>
			)}
		</>
	);
};

export default JOBS;
