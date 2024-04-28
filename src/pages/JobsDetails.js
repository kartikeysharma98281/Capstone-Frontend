// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./JobsDetails.css"

// import Headers from "./Headers";

// const JobsDetails = () => {
//   const navigate = useNavigate();

//   const onApplyButtonFrameClick = useCallback(() => {
//     navigate("/login-jobs");
//   }, [navigate]);


//   return (
//     <div className="jobs">
//       <Headers />      
//       <main className="apply-text" style={{textAlign: "left"}}>
//         <section className="october-posted-text">
//           <div className="inner-frame">
//             <div className="data-analyst-intern-text">
//               <div className="ellipse-shape">
//                 <div className="monetization-location-text" />
//               </div>
//               <div className="data-intern-frame">
//                 <div className="app-frame">
//                   <div className="notifications-frame">
//                     <div className="profile-frame">
//                       <div className="data-analyst-intern">
//                         Data Analyst Intern
//                       </div>
//                       <div className="techgen-innovations">
//                         TechGen Innovations
//                       </div>
//                     </div>
//                     <div className="requirements-frame">
//                       <div className="monetization-frame">
//                         <div className="location-text">
//                           <img
//                             className="monetization-on-icon"
//                             loading="eager"
//                             alt=""
//                             src="/monetization-on@2x.png"
//                             style={{top: "11px"}}
//                           />
//                           <div className="month" style={{fontSize: "19.47px" ,lineHeight: "17.92px" ,height: "11px"}}>₹25000/month</div>
//                         </div>
//                         <div className="location-text1">
//                           <img
//                             className="location-on-icon"
//                             loading="eager"
//                             alt=""
//                             src="/location-on@2x.png"
//                             style={{top: "7px"}}
//                           />
//                           <div className="new-york-city" style={{fontSize: "19.47px" ,top: "7px"}}>New York City, NY</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="techgen-innovations-is" style={{width: "853px" ,height: "104px",fontSize: "19.54px"}}>
//                     TechGen Innovations is a forward-thinking technology company
//                     at the forefront of innovation, dedicated to transforming
//                     industries through cutting-edge solutions. Established with
//                     a vision to revolutionize the technological landscape, we
//                     specialize in harnessing the power of emerging technologies
//                     to drive progress and create impactful solutions for
//                     businesses worldwide.
//                   </div>
//                 </div>
//                 <div className="responsibilities-frame">
//                   <div className="education-label">
//                     <div className="what-youll-do-container">
//                       <p className="what-youll-do" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "25.99px"}}>What you'll do</p>
//                       <p className="the-data-analyst" style={{fontSize: "19.54px" ,width: "1034px"}}>
//                         The Data Analyst Intern will dive into the world of data
//                         analysis, gaining hands-on experience in collecting,
//                         processing, and interpreting data. They will collaborate
//                         with teams to understand real-world business problems,
//                         apply statistical techniques to uncover insights, and
//                         assist in producing reports that drive decision-making
//                         within the organization.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="responsibilities-data-collect-container">
//                     <p className="responsibilities" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "25.99px"}}>Responsibilities</p>
//                     <ol className="data-collection-and-analysis" style={{fontSize: "19.54px" ,width: "1034px"}}>
//                       <li className="data-collection-and-analysis1" >
//                         <span>
//                           Data Collection and Analysis: Gather, clean, and
//                           organize datasets for analysis purposes.
//                         </span>
//                       </li>
//                       <li className="data-mining-and-interpretation">
//                         <span>
//                           Data Mining and Interpretation: Utilize statistical
//                           methods and tools to extract meaningful insights from
//                           data.
//                         </span>
//                       </li>
//                       <li className="report-generation-create-repo">
//                         <span>
//                           Report Generation: Create reports and visualizations
//                           to present findings and trends.
//                         </span>
//                       </li>
//                       <li className="assist-in-decision-making-sup">
//                         <span>
//                           Assist in Decision Making: Support the team in making
//                           data-driven decisions by providing analysis and
//                           recommendations.
//                         </span>
//                       </li>
//                       <li className="quality-assurance-ensure-the">
//                         <span>
//                           Quality Assurance: Ensure the accuracy and reliability
//                           of data through validation and verification processes.
//                         </span>
//                       </li>
//                       <li>
//                         <span>
//                           Collaboration: Work with cross-functional teams to
//                           understand data needs and requirements.
//                         </span>
//                       </li>
//                     </ol>
//                   </div>
//                   <div className="requirements-education-pursu-container" style={{top: "64px"}}>
//                     <p className="requirements" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "25.99px"}}>Requirements</p>
//                     <ol className="education-pursuing-or-recentl" style={{fontSize: "19.54px" ,width: "1034px"}}>
//                       <li className="education-pursuing-or-recentl1">
//                         <span>
//                           Education: Pursuing or recently graduated with a
//                           degree in Statistics, Mathematics, Computer Science,
//                           or related fields.
//                         </span>
//                       </li>
//                       <li className="analytical-skills-strong-anal">
//                         <span>
//                           Analytical Skills: Strong analytical and
//                           problem-solving abilities to handle complex datasets.
//                         </span>
//                       </li>
//                       <li className="technical-proficiency-familia">
//                         <span>
//                           Technical Proficiency: Familiarity with data analysis
//                           tools like Python, R, SQL, or Excel.
//                         </span>
//                       </li>
//                       <li className="attention-to-detail-ability-t">
//                         <span>
//                           Attention to Detail: Ability to maintain precision and
//                           accuracy while working with data.
//                         </span>
//                       </li>
//                       <li className="communication-good-verbal-and">
//                         <span>
//                           Communication: Good verbal and written communication
//                           skills to convey findings effectively.
//                         </span>
//                       </li>
//                       <li>
//                         <span>
//                           Adaptability: Willingness to learn new tools and
//                           methodologies in data analysis.
//                         </span>
//                       </li>
//                     </ol>
//                   </div>
//                   <div className="perks-learning-opportunity-container" style={{top:"98px"}}>
//                     <p className="perks">
//                       <span className="perks1" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "64.99px"}}>Perks</span>
//                       <span>&nbsp;</span>
//                     </p>
//                     <ol className="learning-opportunity-exposure" style={{fontSize: "19.54px" ,width: "1034px"}}>
//                       <li className="learning-opportunity-exposure1">
//                         <span>
//                           Learning Opportunity: Exposure to real-world data and
//                           analytics projects, enhancing skills and knowledge.
//                         </span>
//                       </li>
//                       <li className="mentorship-guidance-from-expe">
//                         <span>
//                           Mentorship: Guidance from experienced professionals in
//                           the field.
//                         </span>
//                       </li>
//                       <li className="networking-opportunities-to-c">
//                         <span>
//                           Networking: Opportunities to connect and collaborate
//                           with industry experts and peers.
//                         </span>
//                       </li>
//                       <li className="flexible-environment-a-dynami">
//                         <span>
//                           Flexible Environment: A dynamic and flexible work
//                           culture that encourages creativity and innovation.
//                         </span>
//                       </li>
//                       <li>
//                         <span>
//                           Stipend: A monthly stipend of 25,000 rupees to support
//                           living expenses during the internship.
//                         </span>
//                       </li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="apply-button-label">
//               <div className="posted-text">
//                 <button
//                   className="apply-button-frame"
//                   onClick={onApplyButtonFrameClick}
//                   style={{ left: "1223px" ,position: "absolute" ,top: "122px",width: "126px",height: "38px"}}
//                 >
//                   <div className="apply">Apply</div>
//                 </button>
//                 <div className="posted-on-october" style={{width: "197px" ,height: "21px" ,fontSize: "16.01px" ,top: "57px"}}>
//                   Posted on October 15, 2023
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="apply-button" style={{width: "293px" ,position: "relative" ,top: "25px"}}>
//             <button className="posting-info" onClick={onApplyButtonFrameClick} style={{height: "41px"}}>
//               <div className="apply1">Apply</div>
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default JobsDetails; 


import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const JobsDetails = () => {

  const navigate = useNavigate();

  //   const onApplyButtonFrameClick = useCallback(() => {
  //     navigate("/login-jobs");
  //   }, [navigate]);


  const onFrameContainer1Click = useCallback(() => {
    // Please sync "JOBS" to the project
    navigate("/login-jobs");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "JOBS" to the project
    navigate("/login-jobs");
  }, [navigate]);

  return (
    <div className="w-full relative bg-fafafa h-[1388px] overflow-y-auto text-left text-lgi-5 text-f709c font-font">
      <div className="absolute top-[154px] left-[247px] text-[20.7px] inline-block w-[190.4px] h-[25.8px]">
        TechGen Innovations
      </div>
      <div className="absolute top-[169px] left-[1152px] text-base">
        Posted on October 15, 2023
      </div>
      <div className="absolute top-[111px] left-[247px] text-[31.5px] font-semibold text-color">
        Data Analyst Intern
      </div>
      <div className="absolute top-[125px] left-[559px] h-[23px] flex flex-row items-center justify-center gap-[2px] text-sm-5 text-limegreen">
        <img
          className="w-[23px] relative h-[23px]"
          alt=""
          src="/monetization-on@2x.png"
        />
        <div className="w-[92px] relative inline-block h-5 shrink-0">
          ₹25000/month
        </div>
      </div>
      <div className="absolute top-[125px] left-[696px] flex flex-row items-center justify-start gap-[2px] text-sm-5 text-color">
        <img
          className="w-[23px] relative h-[23px]"
          alt=""
          src="/location-on@2x.png"
        />
        <div className="w-[107px] relative inline-block h-5 shrink-0">
          New York City, NY
        </div>
      </div>
      <div className="absolute top-[141px] left-[42px] rounded-[50%] bg-gainsboro-200 w-[145px] h-[145px]" />
      <div className="absolute top-[383px] left-[249px] inline-block w-[791px] text-color">
        <p className="m-0 font-semibold text-left">What you'll do</p>
        <p className="m-0 text-sm-5 text-f709c text-left">
          The Data Analyst Intern will dive into the world of data analysis,
          gaining hands-on experience in collecting, processing, and
          interpreting data. They will collaborate with teams to understand
          real-world business problems, apply statistical techniques to uncover
          insights, and assist in producing reports that drive decision-making
          within the organization.
        </p>
      </div>
      <div className="absolute top-[202px] left-[247px] inline-block w-[853px] text-left">
        TechGen Innovations is a forward-thinking technology company at the
        forefront of innovation, dedicated to transforming industries through
        cutting-edge solutions. Established with a vision to revolutionize the
        technological landscape, we specialize in harnessing the power of
        emerging technologies to drive progress and create impactful solutions
        for businesses worldwide.
      </div>
      <div className="absolute top-[528px] left-[247px] inline-block w-[791px] text-color pb-3px">
        <p className="m-0 font-semibold text-left">Responsibilities</p>
        <ol className="m-0 text-sm-5 pl-[18px] text-f709c">
          <li className="mb-2 text-left">
            <span>
              Data Collection and Analysis: Gather, clean, and organize datasets
              for analysis purposes.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Data Mining and Interpretation: Utilize statistical methods and
              tools to extract meaningful insights from data.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Report Generation: Create reports and visualizations to present
              findings and trends.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Assist in Decision Making: Support the team in making data-driven
              decisions by providing analysis and recommendations.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Quality Assurance: Ensure the accuracy and reliability of data
              through validation and verification processes.
            </span>
          </li>
          <li  className="mb-2 text-left">
            <span>
              Collaboration: Work with cross-functional teams to understand data
              needs and requirements.
            </span>
          </li>
        </ol>
      </div>
      <div className="absolute top-[797px] left-[247px] inline-block w-[791px] text-color ">
        <p className="m-0 font-semibold text-left">Requirements</p>
        <ol className="m-0 text-sm-5 pl-[18px] text-f709c">
          <li className="mb-2 text-left">
            <span>
              Education: Pursuing or recently graduated with a degree in
              Statistics, Mathematics, Computer Science, or related fields.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Analytical Skills: Strong analytical and problem-solving abilities
              to handle complex datasets.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Technical Proficiency: Familiarity with data analysis tools like
              Python, R, SQL, or Excel.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Attention to Detail: Ability to maintain precision and accuracy
              while working with data.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Communication: Good verbal and written communication skills to
              convey findings effectively.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Adaptability: Willingness to learn new tools and methodologies in
              data analysis.
            </span>
          </li>
        </ol>
      </div>
      <div className="absolute top-[1069px] left-[247px] inline-block w-[791px] text-sm-5">
        <p className="m-0 text-left">
          <span className="text-lgi-5 font-semibold font-font text-color ">
            Perks
          </span>
          <span>&nbsp;</span>
        </p>
        <ol className="m-0 pl-[18px]">
          <li className="mb-2 text-left">
            <span>
              Learning Opportunity: Exposure to real-world data and analytics
              projects, enhancing skills and knowledge.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Mentorship: Guidance from experienced professionals in the field.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Networking: Opportunities to connect and collaborate with industry
              experts and peers.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Flexible Environment: A dynamic and flexible work culture that
              encourages creativity and innovation.
            </span>
          </li>
          <li className="mb-2 text-left">
            <span>
              Stipend: A monthly stipend of 25,000 rupees to support living
              expenses during the internship.
            </span>
          </li>
        </ol>
      </div>
      <div
        className="absolute top-[122px] left-[calc(50%_+_455px)] rounded-[2.67px] bg-color w-[126px] h-[38px] flex flex-row items-center justify-center pt-0 px-0 pb-[1.1px] box-border cursor-pointer text-[13.1px] text-fafafa"
        onClick={onFrameContainer1Click}
      >
        <div className="w-[37px] relative font-semibold inline-block h-[17px] shrink-0">
          Apply
        </div>
      </div>
      <div
        className="absolute top-[1299px] left-[calc(50%_-_146px)] rounded-[3.79px] bg-color w-[293px] h-[54px] flex flex-row items-center justify-center pt-0 px-[94.3px] pb-[1.6px] box-border cursor-pointer text-[18.7px] text-fafafa"
        onClick={onFrameContainer2Click}
      >
        <div className="w-[52.6px] relative font-semibold inline-block h-[24.2px] shrink-0">
          Apply
        </div>
      </div>
      <div className="absolute w-full top-[0px] right-[0%] left-[0%] shadow-[0px_3px_11px_rgba(229,_210,_131,_0.07)] flex flex-col items-start justify-start gap-[10px] text-[21.3px] text-e5d283">
        <div className="w-[1536px] relative bg-celestial-hue-celestial-light box-border h-[51px] z-[0] border-b-[0.5px] border-solid border-e5d283" />
        <div className="!m-[0] absolute top-[11px] right-[67.7px] flex flex-row items-center justify-start gap-[31px] z-[1]">
          <img
            className="w-4 relative h-[19.7px]"
            alt=""
            src="/bookmarks@2x.png"
          />
          <img
            className="w-[20.2px] relative h-[20.2px]"
            alt=""
            src="/application@2x.png"
          />
          <img
            className="w-[19px] relative h-[25px]"
            alt=""
            src="/notifications@2x.png"
          />
          <img
            className="w-[30px] relative h-[30px]"
            alt=""
            src="/profile.png"
          />
        </div>
        <div className="!m-[0] absolute top-[3px] left-[41px] flex flex-col items-start justify-start z-[2]">
          <div className="w-[66px] relative h-[44.9px]">
            <div className="absolute top-[15.9px] left-[0px] font-black">
              Nexus
            </div>
            <div className="absolute top-[25px] left-[14px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-e5d283" />
            <div className="absolute top-[0px] left-[17.5px] text-[20.6px] font-light text-color inline-block w-[45.6px] h-[21.9px]">
              Work
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[15px] left-[198px] h-5 flex flex-row items-start justify-start gap-[33px] text-mini">
        <div className="flex flex-row items-center justify-center">
          <div className="relative">Jobs</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="relative">Skill tests</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="relative">Interviews</div>
        </div>
      </div>
    </div>
  
  )

}
export default JobsDetails;
  