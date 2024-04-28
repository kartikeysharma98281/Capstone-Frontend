import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar2 from "./ProgressBar2";
import "./ResumeAndPortfolioSeeker.css";
import { useUserContext } from "../UserContext";

const ResumeAndPortfolioSeeker = () => {
	const navigate = useNavigate();
	const { portfolio, setPortfolio, userInfo, educationInfo, projects, skills } =
		useUserContext();
	const [link, setLink] = useState(portfolio.link || "");

	const handleSave = useCallback(() => {
		setPortfolio({ ...portfolio, link });
	}, [link, portfolio, setPortfolio]);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		console.log(projects);
	// 		console.log(JSON.stringify(projects));
	// 		// console.log(portfolio);
	// 	}, 200);
	// 	return () => clearTimeout(timer);
	// }, [portfolio, projects]);

	const databaseCall = async () => {
		try {
			const response = await fetch("http://localhost:5000/info", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstname: userInfo.firstName,
					lastname: userInfo.lastName,
					date: userInfo.date,
					region: userInfo.city,
					contactNumber: userInfo.contact,
					emailAddress: userInfo.email,
					description: userInfo.disc,
				}),
			});
		} catch (error) {
			console.log(error);
			alert("Error occurred while saving basic details.");
			navigate("/basic-details-seeker");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/education", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					institution: {
						tenth: {
							name: educationInfo.tenth.name,
							city: educationInfo.tenth.city,
							passingYear: educationInfo.tenth.year,
							titleOfDegree: educationInfo.tenth.title,
							nameOfEducationBoard: educationInfo.tenth.board,
							percentage: educationInfo.tenth.percentage,
						},
						twelfth: {
							name: educationInfo.twelfth.name,
							city: educationInfo.twelfth.city,
							passingYear: educationInfo.twelfth.year,
							titleOfDegree: educationInfo.twelfth.title,
							nameOfEducationBoard: educationInfo.twelfth.board,
							percentage: educationInfo.twelfth.percentage,
						},
						college: {
							name: educationInfo.college.name,
							city: educationInfo.college.city,
							passingYear: educationInfo.college.year,
							titleOfDegree: educationInfo.college.title,
							nameOfEducationBoard: educationInfo.college.board,
							percentage: educationInfo.college.percentage,
						},
					},
				}),
			});
		} catch (error) {
			console.error("Error:", error);
			alert("Error occurred while saving education details.");
			navigate("/basic-details-seeker");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/projects", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					project1: {
						title: projects[0].title,
						role: projects[0].role,
						description: projects[0].disc,
						link: projects[0].link,
					},
					project2: {
						title: projects[1].title,
						role: projects[1].role,
						description: projects[1].disc,
						link: projects[1].link,
					},
					project3: {
						title: projects[2].title,
						role: projects[2].role,
						description: projects[2].disc,
						link: projects[2].link,
					},
				}),
			});
		} catch (error) {
			console.error("Error:", error);
			alert("Error occurred while saving project details.");
			navigate("/basic-details-seeker");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/portfolio", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					link: link,
				}),
			});
			navigate("/login-jobs");
		} catch (error) {
			console.error("Error:", error);
			alert("Error occurred while saving portfolio link.");
			navigate("/basic-details-seeker");
			return;
		}
	};

	const onSkillsAndProjectButtonClick = useCallback(() => {
		handleSave();
		databaseCall();

		// Please sync "JOBS" to the project
		// navigate("/login-jobs");
	}, [handleSave]);

	const onGoBackTextClick = useCallback(() => {
		navigate("/skills-and-projects-seeker");
	}, [navigate]);

	return (
		<div className="resume-and-portfolioseeker">
			<div
				className="portfolio"
				style={{ fontSize: "23px" }}
			>
				Portfolio
			</div>
			<div className="line-separator" />
			<button
				className="skills-and-project-button2"
				onClick={onSkillsAndProjectButtonClick}
			>
				<div
					className="save-and-continue"
					style={{ left: "8px" }}
				>
					Save and continue
				</div>
				<img
					className="progress-frame-icon"
					alt=""
					src="/progress-frame.svg"
				/>
			</button>
			<div
				className="go-back3"
				onClick={onGoBackTextClick}
			>
				Go back
			</div>
			<div className="no-portfolio">No portfolio ?</div>
			<div className="create-your-first">
				Create your first portfolio now at
			</div>
			<img
				className="resume-and-portfolioseeker-child"
				loading="eager"
				alt=""
				src="/group-2.png"
			/>
			<div
				className="component-6-parent5"
				style={{ height: "34px" }}
			>
				<div className="component-610"></div>
				{/* <div className="link-of-portfolio"> */}
				<input
					className="link-text"
					placeholder="   Link of portfolio website"
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
				{/* </div> */}
			</div>
			<ProgressBar2 />
			<div className="create-portfolio-btn">
				<a href="https://www.behance.net/">
					<img
						className="behance-icon"
						loading="eager"
						alt=""
						src="/Behance.png"
					/>
				</a>
			</div>
			<div className="create-portfolio-btn1">
				<a href="https://dribble.com/">
					<img
						className="dribbble-icon"
						loading="eager"
						alt=""
						src="/Dribbble.png"
					/>
				</a>
			</div>
			<button className="create-portfolio-btn2">
				<a href="https://www.squarespace.com/">
					<img
						className="squarespace-icon"
						alt=""
						src="/Squarespace.png"
					/>
				</a>
			</button>
			<button className="create-portfolio-btn3">
				<a href="https://www.wix.com/">
					<img
						className="wix-icon"
						alt=""
						src="/Wix.png"
					/>
				</a>
			</button>
		</div>
	);
};

export default ResumeAndPortfolioSeeker;
