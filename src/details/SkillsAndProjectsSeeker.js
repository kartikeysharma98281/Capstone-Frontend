import { useCallback, useState, useEffect } from "react";
import Education1 from "./Education1";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

const SkillsAndProjectsseeker = () => {
	const { projects, setProjects } = useUserContext();

	const [project1Title, setproject1Title] = useState(projects[0].title || "");
	const [project1Role, setproject1Role] = useState(projects[0].role || "");
	const [project1Disc, setproject1Disc] = useState(projects[0].disc || "");
	const [project1Link, setproject1Link] = useState(projects[0].link || "");

	const [project2Title, setproject2Title] = useState(projects[1].title || "");
	const [project2Role, setproject2Role] = useState(projects[1].role || "");
	const [project2Disc, setproject2Disc] = useState(projects[1].disc || "");
	const [project2Link, setproject2Link] = useState(projects[1].link || "");

	const [project3Title, setproject3Title] = useState(projects[2].title || "");
	const [project3Role, setproject3Role] = useState(projects[2].role || "");
	const [project3Disc, setproject3Disc] = useState(projects[2].disc || "");
	const [project3Link, setproject3Link] = useState(projects[2].link || "");

	const handleSave = useCallback(() => {
		setProjects([
			{
				title: project1Title,
				role: project1Role,
				disc: project1Disc,
				link: project1Link,
			},
			{
				title: project2Title,
				role: project2Role,
				disc: project2Disc,
				link: project2Link,
			},
			{
				title: project3Title,
				role: project3Role,
				disc: project3Disc,
				link: project3Link,
			},
		]);
	}, [
		project1Title,
		project1Role,
		project1Disc,
		project1Link,
		project2Title,
		project2Role,
		project2Disc,
		project2Link,
		project3Title,
		project3Role,
		project3Disc,
		project3Link,
		setProjects,
	]);

	useEffect(() => {
		console.log("Projects updated:", projects);
	}, [projects]);

	const navigate = useNavigate();
	const onSkillsAndProjectButtonClick = useCallback(() => {
		handleSave();
		// navigate("/resume-and-portfolio-seeker");
	}, [handleSave]);

	const onGoBackTextClick = useCallback(() => {
		navigate("/educationseeker");
	}, [navigate]);

	return (
		<div className="w-full h-[1200px] relative bg-fafafa overflow-y-auto tracking-[normal] text-left text-lgi-5 text-color font-font mq675:h-auto mq675:min-h-[1189]">
			<div className="absolute top-[115px] left-[166px] font-semibold">
				Projects (minimum 2 projects)
			</div>
			<div className="absolute top-[94px] left-[63px] shadow-[0px_10px_11px_rgba(229,_210,_131,_0.07)] bg-f709c box-border w-[1431.5px] h-[0.5px] border-t-[0.5px] border-solid border-e5d283" />
			<button
				className="cursor-pointer top-[1160px] [border:none] py-[6.4px] px-14 bg-color absolute left-[704px] rounded-[3.96px] flex flex-row items-start justify-start gap-[16px]"
				onClick={onSkillsAndProjectButtonClick}
			>
				<div className="relative text-base-7 font-semibold font-font text-celestial-hue-celestial-light text-left">
					Resume and Portfolio
				</div>
				<div className="h-[18.3px] flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0 box-border">
					<img
						className="w-[5.8px] h-[11.6px] relative"
						alt=""
						src="/text-frame.svg"
					/>
				</div>
			</button>
			<div
				className="absolute top-[1160px] left-[584px] text-base-3 text-e5d283 inline-block min-w-[59px] cursor-pointer"
				onClick={onGoBackTextClick}
			>
				Go back
			</div>
			<img
				className="absolute top-[28px] left-[63px] w-[71px] h-9"
				loading="lazy"
				alt=""
				src="/group-2.png"
			/>

			<div className="absolute top-[174px] left-[calc(50%_-_673px)] w-[777px] flex flex-col items-end justify-start gap-[18px] max-w-full text-72xl-3 text-f709c">
				<div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[43px] max-w-full">
					<div className="w-[50px] relative inline-block mq450:text-8xl mq750:text-27xl">
						1
					</div>
					<div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[445px] max-w-full text-base-3 text-silver-100 mq675:min-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
							<div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq675:flex-wrap">
								<div className="h-11 flex-1 relative min-w-[242px] max-w-full">
									<div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
										<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
									</div>
									<input
										className="w-[220.5px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19.4px] text-silver-100 text-left inline-block p-0 z-[1]"
										placeholder="Title of the project"
										type="text"
										value={project1Title}
										onChange={(e) => setproject1Title(e.target.value)}
									/>
								</div>

								<div className="h-11 w-[291px] relative">
									<div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
										<div className="h-11 flex-1 relative bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
									</div>
									<input
										className="w-full [border:none] [outline:none] font-font text-base-3 bg-[transparent] absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
										placeholder="Role in the project"
										type="text"
										value={project1Role}
										onChange={(e) => setproject1Role(e.target.value)}
									/>
								</div>
							</div>
							<textarea
								className="bg-fafafa h-[139px] w-auto [outline:none] self-stretch relative box-border py-2.5 px-[20.399999999999636px] font-font text-base-6 text-silver-100 border-[0.8px] border-solid border-silver-100"
								placeholder="Short description about project"
								rows={7}
								cols={34}
								value={project1Disc}
								onChange={(e) => setproject1Disc(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="w-[685px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-left text-base-3 text-silver-100 font-font">
					{/* <div className="h-11 flex-1 relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-row items-start justify-start max-w-full">
              <div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[10px] left-[19px] inline-block w-[250px] z-[1]">
              Link of website/ Github/ prototype
            </div>
          </div> */}
					<div className="h-11 flex-1 relative max-w-full">
						<div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
							<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
						</div>
						<input
							className="w-[250px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
							placeholder="Link of website/ Github/ prototype"
							type="text"
							value={project1Link}
							onChange={(e) => setproject1Link(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="absolute top-[500px] left-[calc(50%_-_673px)] w-[777px] flex flex-col items-end justify-start gap-[18px] max-w-full text-72xl-3 text-f709c">
				<div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[43px] max-w-full">
					<div className="w-[50px] relative inline-block mq450:text-8xl mq750:text-27xl">
						2
					</div>
					<div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[445px] max-w-full text-base-3 text-silver-100 mq675:min-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
							<div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq675:flex-wrap">
								<div className="h-11 flex-1 relative min-w-[242px] max-w-full">
									<div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
										<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
									</div>
									<input
										className="w-[220.5px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19.4px] text-silver-100 text-left inline-block p-0 z-[1]"
										placeholder="Title of the project"
										type="text"
										value={project2Title}
										onChange={(e) => setproject2Title(e.target.value)}
									/>
								</div>

								<div className="h-11 w-[291px] relative">
									<div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
										<div className="h-11 flex-1 relative bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
									</div>
									<input
										className="w-full [border:none] [outline:none] font-font text-base-3 bg-[transparent] absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
										placeholder="Role in the project"
										type="text"
										value={project2Role}
										onChange={(e) => setproject2Role(e.target.value)}
									/>
								</div>
							</div>
							<textarea
								className="bg-fafafa h-[139px] w-auto [outline:none] self-stretch relative box-border py-2.5 px-[20.399999999999636px] font-font text-base-6 text-silver-100 border-[0.8px] border-solid border-silver-100"
								placeholder="Short description about project"
								rows={7}
								cols={34}
								value={project2Disc}
								onChange={(e) => setproject2Disc(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="w-[685px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-left text-base-3 text-silver-100 font-font">
					<div className="h-11 flex-1 relative max-w-full">
						<div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
							<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
						</div>
						<input
							className="w-[250px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
							placeholder="Link of website/ Github/ prototype"
							type="text"
							value={project2Link}
							onChange={(e) => setproject2Link(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="absolute top-[840px] left-[calc(50%_-_673px)] w-[777px] flex flex-col items-end justify-start gap-[18px] max-w-full text-72xl-3 text-f709c">
				<div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[43px] max-w-full">
					<div className="w-[50px] relative inline-block mq450:text-8xl mq750:text-27xl">
						3
					</div>
					<div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[445px] max-w-full text-base-3 text-silver-100 mq675:min-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
							<div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq675:flex-wrap">
								<div className="h-11 flex-1 relative min-w-[242px] max-w-full">
									<div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
										<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
									</div>
									<input
										className="w-[220.5px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19.4px] text-silver-100 text-left inline-block p-0 z-[1]"
										placeholder="Title of the project"
										type="text"
										value={project3Title}
										onChange={(e) => setproject3Title(e.target.value)}
									/>
								</div>

								<div className="h-11 w-[291px] relative">
									<div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
										<div className="h-11 flex-1 relative bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
									</div>
									<input
										className="w-full [border:none] [outline:none] font-font text-base-3 bg-[transparent] absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
										placeholder="Role in the project"
										type="text"
										value={project3Role}
										onChange={(e) => setproject3Role(e.target.value)}
									/>
								</div>
							</div>
							<textarea
								className="bg-fafafa h-[139px] w-auto [outline:none] self-stretch relative box-border py-2.5 px-[20.399999999999636px] font-font text-base-6 text-silver-100 border-[0.8px] border-solid border-silver-100"
								placeholder="Short description about project"
								rows={7}
								cols={34}
								value={project3Disc}
								onChange={(e) => setproject3Disc(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="w-[685px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-left text-base-3 text-silver-100 font-font">
					{/* <div className="h-11 flex-1 relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-row items-start justify-start max-w-full">
              <div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[10px] left-[19px] inline-block w-[250px] z-[1]">
              Link of website/ Github/ prototype
            </div>
          </div> */}
					<div className="h-11 flex-1 relative max-w-full">
						<div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
							<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
						</div>
						<input
							className="w-[250px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
							placeholder="Link of website/ Github/ prototype"
							type="text"
							value={project3Link}
							onChange={(e) => setproject3Link(e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className="absolute top-[168px] left-[calc(50%_+_227px)] flex flex-row items-start justify-start pt-2.5 pb-3 pr-[13.5px] pl-[19px] box-border gap-[57px] max-w-full text-base-3 text-silver-100">
				<div className="h-full w-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full">
					<div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100" />
				</div>
				<input
					className="relative z-[1] border-none outline-none bg-transparent"
					placeholder="Search languages, software, frameworks..."
					type="text"
				/>
				<div className="h-[21.5px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
					<img
						className="w-[17.5px] h-[17.5px] relative z-[2]"
						alt=""
						src="/frame-34.svg"
					/>
				</div>
			</div>

			<div className="absolute top-[115px] left-[995px] font-semibold">
				Skills (minimum 5 skills)
			</div>

			<div className="absolute top-[19px] left-[544px] w-[447.5px] flex flex-col items-end justify-start gap-[1.3px] max-w-full text-left text-smi-7 text-f709c font-font">
				<img
					className="w-[403px] h-[3.8px] absolute !m-[0] top-[17px] left-[20px]"
					alt=""
					src="/Property1-70.png"
				/>
				<div className="self-stretch flex flex-row items-start justify-end py-0 pr-[4.8px] pl-0 box-border max-w-full">
					<div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
						<img
							className="h-[39.7px] w-[39.7px] relative min-h-[40px] z-[1]"
							alt=""
							src="/Property1-green_tick.png"
						/>
						<div className="h-[39.7px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
							<img
								className="w-[39.7px] h-[39.7px] relative z-[1]"
								loading="lazy"
								alt=""
								src="/Property1-green_tick.png"
							/>
						</div>
						<img
							className="h-[39.7px] w-[39.7px] relative min-h-[40px] z-[1]"
							loading="lazy"
							alt=""
							src="/Property1-skills.png"
						/>
						<img
							className="h-[39.7px] w-[39.7px] relative min-h-[40px] z-[1]"
							loading="lazy"
							alt=""
							src="/Property1-skills.png"
						/>
					</div>
				</div>
				<div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-[7px] box-border max-w-full gap-[20px]">
					<div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
						<div className="flex flex-row items-start justify-start py-0 px-px">
							<div className="relative inline-block min-w-[23px]">Info</div>
						</div>
					</div>
					<div className="flex flex-row items-start justify-start gap-[32.5px] max-w-[calc(100%_-_45px)]">
						<div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
							<div className="flex flex-row items-start justify-start py-0 px-px">
								<div className="relative inline-block min-w-[56px]">
									Education
								</div>
							</div>
						</div>
						<div className="flex flex-row items-start justify-start text-lg-6">
							<div className="relative font-semibold">Skills and Projects</div>
						</div>
						<div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
							<div className="flex flex-row items-start justify-start py-0 px-px">
								<div className="relative inline-block min-w-[48px]">
									Portfolio
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsAndProjectsseeker;
