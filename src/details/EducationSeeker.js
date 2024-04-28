// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import Education from "./Education";
// import "./EducationSeeker.css";

// const Educationseeker = () => {
//   const navigate = useNavigate();

//   const onSkillsAndProjectButtonClick = () => {
//     navigate("/skills-and-projects-seeker");
//   };
//   const onGoBackTextClick = useCallback(() => {
//     navigate("/basic-details-seeker");
//   }, [navigate]);

//   return (
//     <form className="educationseeker">
//       <div className="education1">Education</div>
//       <div className="skills-projects-frame" />
//       <button
//         className="skills-and-project-button"
//         onClick={onSkillsAndProjectButtonClick}
//       >
//         <div className="skills-and-projects" style={{width: "120px" , left: "9px"}}>Skills and Projects</div>
//         <img
//           className="frame-skills-projects"
//           alt=""
//           src="/frame-skills-projects.svg"
//         />
//       </button>
//       <div className="go-back1" onClick={onGoBackTextClick}>
//         Go back
//       </div>
//       <img
//         className="educationseeker-child"
//         loading="eager"
//         alt=""
//         src="/group-2.png"
//       />
//       <section className="education-1">
//         <div className="framework"><img src="/1.png" /></div>
//         <div className="component">
//           <div className="frame-parent">
//             <div className="frame-group">
//               <div className="component-6-parent">
//                 <div className="component-6">
//                   {/* <div className="city-region" /> */}
//                 </div>
//                 <div className="name-of-the">
//                 <input className="component-6-child" placeholder="Name of the Insititution" style={{width: "373px" , height: "44px"}} />
//                 </div>
//               </div>
//               <div className="component-6-group">
//                 <div className="component-61">
//                   {/* <div className="component1" /> */}
//                 </div>
//                 <div className="city-region1">
//                   <input className="component1" placeholder="City/Region" style={{width: "291px"}}/>
//                 </div>
//               </div>
//               <div className="component-6-container">
//                 <div className="component-62">
//                   {/* <div className="secondary-info-frame" /> */}
//                 </div>
//                 <div className="year-of-graduation">
//                   <input className="secondary-info-frame" placeholder="Year of Graduation" style={{width: "249px", height: "44px"}} />
//                 </div>
//                 <img className="calendar-icon" alt="" src="/calendar.png" style={{right: "27px"}} />
//               </div>
//             </div>
//             <div className="frame-container">
//               <div className="frame-div">
//                 <div className="component-63">
//                   {/* <div className="title-rectangle" /> */}
//                 </div>
//                 <div className="title-of-degree">
//                   <input className="title-rectangle" placeholder="Title of Degree" style={{width: "373px", height: "44px"}}/>
//                 </div>
//               </div>
//               <div className="component-6-parent1">
//                 <div className="component-64">
//                   {/* <div className="component-6-child" /> */}
//                 </div>
//                 <div className="name-of-the1">
//                 <input className="component-6-child"  placeholder="Name of the Education board" style={{width: "291px" ,height: "44px" , right: "42px"}} />
//                 </div>
//               </div>
//               <div className="component-6-parent2">
//                 <div className="component-65">
//                   {/* <div className="component-6-item" /> */}
//                 </div>
//                 <div className="percentage-cgpa-gpa">
//                   <input className="component-6-item" placeholder="Percentage /CGPA /GPA" style={{width: "291px" ,right: "43px"}} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Education prop="2" />
//       <Education prop="3" propTop="464px" propLeft="calc(50% - 466px)" />
//       <header className="progress-bar-2">
//         <div className="component-frame">
//           <img className="component-29-icon" alt="" src="/Property 1=green tick.png" />
//           <div className="component-25">
//             <div className="text">Info</div>
//           </div>
//         </div>
//         <div className="vector-parent">
//           <img className="vector-icon" alt="" src="/Property 1=45.png" />
//           <div className="cityregionframe">
//             <div className="component-27">
//               <div className="text1">Education</div>
//             </div>
//           </div>
//           <img
//             className="component-31-icon"
//             loading="eager"
//             alt=""
//             src="/Property 1=education.png"
//           />
//         </div>
//         <div className="component-frame1">
//           <img
//             className="component-30-icon"
//             loading="eager"
//             alt=""
//             src="/Property 1=skills.png"
//           />
//           <div className="component-26">
//             <div className="text2">Skills and Projects</div>
//           </div>
//         </div>
//         <div className="skills-and-projects-frame">
//           <img
//             className="component-32-icon"
//             loading="eager"
//             alt=""
//             src="/Property 1=work portfolio.png"
//           />
//           <div className="component-28">
//             <div className="progressbarframe">Portfolio</div>
//           </div>
//         </div>
//       </header>
//     </form>
//   );
// };

// export default Educationseeker;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Educationseeker1 = () => {
  const navigate = useNavigate();

  const onSkillsAndProjectButtonClick = () => {
    navigate("/skills-and-projects-seeker");
  };
  const onGoBackTextClick = useCallback(() => {
    navigate("/basic-details-seeker");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-fafafa h-[713px] overflow-y-auto flex flex-row flex-wrap items-center justify-start pt-5 pb-[200px] pr-[42px] pl-[63px] box-border gap-[43px_102px] text-left text-base-3 text-silver-100 font-font">
        <div className="w-[88px] absolute !m-[0] top-[115px] left-[166px] text-lgi-5 font-semibold text-color inline-block z-[0]">
          Education
        </div>
        <div className="w-[1431.5px] absolute !m-[0] top-[93.8px] left-[62.8px] [filter:drop-shadow(0px_10px_11px_rgba(229,_210,_131,_0.07))] box-border h-[0.5px] z-[1] border-t-[0.5px] border-solid border-e5d283" />
        <div
          className="!m-[0] absolute top-[641px] left-[704px] rounded-[3.96px] bg-color flex flex-row items-center justify-center py-[6.4px] px-14 gap-[16px] cursor-pointer z-[2] text-base-7 text-celestial-hue-celestial-light"
          onClick={onSkillsAndProjectButtonClick}
        >
          <div className="w-[136px] relative font-semibold inline-block h-[25px] shrink-0">
            Skills and Projects
          </div>
          <img
            className="w-[5.8px] relative h-[11.6px]"
            alt=""
            src="/text-frame.svg"
          />
        </div>
        <div
          className="w-[59px] absolute !m-[0] top-[649px] left-[584px] text-e5d283 inline-block cursor-pointer z-[3]"
          onClick={onGoBackTextClick}
        >
          Go back
        </div>
        <div className="!m-[0] absolute top-[28px] left-[63px] flex flex-col items-start justify-start z-[4]">
          <img className="w-[71px] relative h-9" alt="" src="/group-2.png" />
        </div>
        <div className="w-[1088px] absolute !m-[0] top-[158px] left-[calc(50%_-_673px)] h-[121px] z-[5]">
          {/* <div className="absolute top-[11px] left-[92px] w-[373px] h-11">
          <div className="absolute top-[0px] left-[calc(50% - 186.5px)] w-[373px] h-11">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
          </div>
          <div className="absolute top-[10px] left-[167.1px]  inline-block w-[220.5px]">
            <input
              type="text"
              placeholder="Name of the Institution"
              className="w-full h-full bg-transparent border-none outline-none"
            />
          </div>
        </div> */}
          <div className="absolute top-[11px] left-[92px] w-[373px] h-11">
            <div className="absolute top-[0px] left-[calc(50% - 186.5px)] w-[373px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Name of the Institution"
              className="absolute top-[2px] left-[6.1px]  inline-block w-[220.5px] h-full bg-transparent border-none outline-none"
            />
          </div>
        



          <div className="absolute top-[73px] left-[92px] w-[373px] h-11 text-base-6">
            <div className="absolute top-[0px] left-[calc(50% - 186.5px)] w-[373px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[4px] left-[6.1px] inline-block w-[312.8px]">
              <input
                type="text"
                placeholder="Title of degree (eg: B.Tech, 12th, 10th)"
                className=" w-full h-full bg-transparent border-none outline-none"
              />
            </div>
          </div>

          <div className="absolute top-[11px] left-[484px] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50% - 145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[10px] left-[calc(50% - 126.5px)]">
              <input
                type="text"
                placeholder="City/ Region"
                className="bg-transparent border-none outline-none"
              />
            </div>
          </div>

          <div className="absolute top-[11px] left-[799px] w-[249px] h-11">
            <div className="absolute top-[0px] left-[calc(50% - 124.5px)] w-[249px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[10px] left-[10.4px] inline-block w-[135.5px]">
              <input
                type="text"
                placeholder="Year of Graduation"
                className="bg-transparent border-none outline-none"
              />
            </div>
          </div>

          <div className="absolute top-[73px] left-[484px] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50% - 145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[10px] left-[12.5px] inline-block w-[217px]">
              <input
                type="text"
                placeholder="Name of the Education board"
                className="bg-transparent border-none outline-none"
              />
            </div>
          </div>

          <img
            className="absolute top-[20px] left-[calc(50%_+_469px)] w-[21.3px] h-[24.3px]"
            alt=""
            src="/calendar.png"
          />

          <div className="absolute top-[73px] left-[797px] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50% - 145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <div className="absolute top-[10px] left-[12.5px] inline-block w-[214px]">
              <input
                type="text"
                placeholder="Percentage/ CGPA/ GPA"
                className="bg-transparent border-none outline-none"
              />
            </div>
          </div>

          <div className="absolute top-[0px] left-[0px] text-72xl-3 text-f709c">
            1
          </div>
        </div>

        <div className="w-[1088px] absolute !m-[0] top-[310px] left-[calc(50%_-_570px)] h-[121px] z-[6]">
          <div className="absolute top-[14px] left-[calc(50%_-_451px)] w-[373px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_186.5px)] w-[373px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Name of the Institution"
              className="absolute top-[10px] left-[calc(50%_-_167.1px)] inline-block w-[220.5px] bg-transparent border-none outline-none"
            />
          </div>

          <div className="absolute top-[0px] left-[0px] text-72xl-3 text-f709c">
            2
          </div>

          <div className="absolute top-[76px] left-[calc(50%_-_451px)] w-[373px] h-11 text-base-6">
            <div className="absolute top-[0px] left-[calc(50%_-_186.5px)] w-[373px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Title of degree (eg: B.Tech, 12th, 10th)"
              className="absolute top-[10px] left-[calc(50%_-_166.1px)] inline-block w-[312.8px] bg-transparent border-none outline-none"
            />
          </div>

          <div className="absolute top-[14px] left-[calc(50%_-_58px)] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="City/ Region"
              className="absolute top-[10px] left-[calc(50%_-_126.5px)] bg-transparent border-none outline-none"
            />
          </div>

          <div className="absolute top-[14px] left-[calc(50%_+_253px)] w-[249px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_124.5px)] w-[249px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Year of Graduation"
              className="absolute top-[10px] left-[calc(50%_-_105.4px)] bg-transparent border-none outline-none"
            />
          </div>

          <div className="absolute top-[76px] left-[calc(50%_-_58px)] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Name of the Education board"
              className="absolute top-[10px] left-[calc(50%_-_126.5px)] bg-transparent border-none outline-none w-[214px]"
            />
          </div>

          <img
            className="absolute top-[23px] left-[calc(50%_+_469px)] w-[21.3px] h-[24.3px]"
            alt=""
            src="/calendar.png"
          />

          <div className="absolute top-[76px] left-[calc(50%_+_253px)] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Percentage/CGPA/GPA"
              className="absolute top-[10px] left-[calc(50%_-_126.5px)] bg-transparent border-none outline-none w-[171px]"
            />
          </div>
        </div>

        <div className="w-[1088px] absolute !m-[0] top-[464px] left-[calc(50%_-_466px)] h-[121px] z-[7]">
          <div className="absolute top-[15px] left-[calc(50%_-_451px)] w-[373px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_186.5px)] w-[373px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Name of the Institution"
              className="absolute top-[10px] left-[calc(50%_-_167.1px)] bg-transparent border-none outline-none w-[220.5px]"
            />
          </div>

          <div className="absolute top-[77px] left-[calc(50%_-_451px)] w-[373px] h-11 text-base-6">
            <div className="absolute top-[0px] left-[calc(50%_-_186.5px)] w-[373px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Title of degree (eg: B.Tech, 12th, 10th)"
              className="absolute top-[10px] left-[calc(50%_-_166.1px)] bg-transparent border-none outline-none w-[312.8px]"
            />
          </div>

          <div className="absolute top-[15px] left-[calc(50%_-_58px)] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="City/ Region"
              className="absolute top-[10px] left-[calc(50%_-_126.5px)] bg-transparent border-none outline-none w-[214px]"
            />
          </div>

          <div className="absolute top-[15px] left-[calc(50%_+_253px)] w-[249px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_124.5px)] w-[249px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Year of Graduation"
              className="absolute top-[10px] left-[calc(50%_-_105.4px)] bg-transparent border-none outline-none w-[135.5px]"
            />
          </div>

          <div className="absolute top-[77px] left-[calc(50%_-_58px)] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Name of the Education board"
              className="absolute top-[10px] left-[calc(50%_-_126.5px)] bg-transparent border-none outline-none w-[214px]"
            />
          </div>

          <img
            className="absolute top-[24px] left-[calc(50%_+_469px)] w-[21.3px] h-[24.3px]"
            alt=""
            src="/calendar.png"
          />

          <div className="absolute top-[77px] left-[calc(50%_+_253px)] w-[291px] h-11">
            <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] w-[291px] h-11">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
            </div>
            <input
              type="text"
              placeholder="Percentage/CGPA/GPA"
              className="absolute top-[10px] left-[calc(50%_-_126.5px)] bg-transparent border-none outline-none w-[171px]"
            />
          </div>

          <div className="absolute top-[0px] left-[0px] text-72xl-3 text-f709c">
            3
          </div>
        </div>
      </div>

      <div className="absolute top-[19px] left-[544px] w-[447.5px] flex flex-col items-end justify-start gap-[1.3px] max-w-full text-left text-smi-7 text-f709c font-font">
        <img
          className="w-[403px] h-[3.8px] absolute !m-[0] top-[17px] left-[20px]"
          alt=""
          src="/Property1-45.png"
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
                src="/Property1-education.png"
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
              src="/Property1-work_portfolio.png"
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
    </>
  );
};

export default Educationseeker1;
