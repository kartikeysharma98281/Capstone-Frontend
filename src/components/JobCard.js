import React from "react"; 
// // import styles from "../pages/JOBS.module.css"
import { useNavigate } from 'react-router-dom';

// const JobCard = ({name , date , role , city , salary , description , top}) => {

//   



//   return (
//     <div className={styles.jobDescrip} style={{top: top}}>
//       <div className={styles.techgenInnovations}>{name}</div>
//       <div className={styles.october152023}>{date}</div>
//       <div className={styles.dataAnalystIntern}>{role}</div>
//       <div className={styles.analyzeAndInterpret}>
//         {description}
//       </div>
//       <div className={styles.stipend}>
//         <img
//           className={styles.monetizationOnIcon}
//           alt=""
//           src="/monetization-on@2x.png"
//         />
//         <div className={styles.month}>{salary}</div>
//       </div>
//       <div className={styles.locationOnParent}>
//         <img
//           className={styles.monetizationOnIcon}
//           alt=""
//           src="/location-on@2x.png"
//         />
//         <div className={styles.newYorkCity}>{city}</div>
//       </div>
//       <img className={styles.bookmarkIcon} alt="" src="/bookmark@2x.png" />
//       <div className={styles.component4} onClick={showJobsDetails} >
//         <div className={styles.applyNow}>Apply Now</div>
//       </div>
//       <div className={styles.jobDescripChild} />
//     </div>
//   );
// }; 

// export default JobCard;

// import "./JobCard.css";

// const JobCard = ({name , date , role , city , salary , description }) => {
//   return (
//     <div className="job-descrip">
//       <div className="frame-parent">
//         <div className="frame-wrapper">
//           <div className="ellipse-parent">
//             {/* <div className="frame-child" /> */}
//             <div className="frame-container">
//               <div className="frame-group" style={{maxWidth: "117%"}}>
//                 <div className="data-analyst-intern-parent">
//                   <div className="data-analyst-intern">{role}</div>
//                   <div className="techgen-innovations-wrapper">
//                     <div className="techgen-innovations" style={{fontSize: "15.7px"}}>
//                     {name}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="october-15-2023-wrapper">
//                   <div className="october-15-2023">{date}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="analyze-and-interpret-data-to-wrapper">
//           <div className="analyze-and-interpret">
//           {description}
//           </div>
//         </div>
//         <div className="frame-div" >
//           <div className="monetization-on-parent">
//             <img
//               className="monetization-on-icon"
//               loading="lazy"
//               alt=""
//               src="/monetization-on@2x.png"
//             />
//             <div className="month-wrapper">
//               <div className="month">{salary}</div>
//             </div>
//           </div>
//           <div className="location-on-parent">
//             <img
//               className="location-on-icon"
//               loading="lazy"
//               alt=""
//               src="/location-on@2x.png"
//             />
//             <div className="new-york-city-ny-wrapper">
//               <div className="new-york-city">{city}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="job-descrip-inner">
//         <div className="frame-parent1">
//           <div className="bookmark-wrapper">
//             <img
//               className="bookmark-icon"
//               loading="lazy"
//               alt=""
//               src="/bookmark@2x.png"
//             />
//           </div>
//           <button className="component-4">
//             <div className="apply-now">Apply Now</div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCard;


const JobCard = ({name , date , role , city , salary , description }) => {

  const navigate = useNavigate();

  const showJobsDetails = ()=>{
    navigate("/job-details")
  }

  return (
    <div className="flex items-center justify-center mt-2">
    <div className="w-[684px] shadow-[0px_10px_11px_rgba(229,_210,_131,_0.07)] rounded-8xs bg-celestial-hue-celestial-light box-border max-w-full h-[162px] text-left text-sm-5 text-f709c font-font border-[0.5px] border-solid border-rgb(59 130 246 / 0.5) top-44 flex items-center justify-center top-1/2 left-1/5 transform -translate-x-1/5 -translate-y-1/2 ">
      <div className="absolute top-[48px] left-[104px] inline-block w-[124px] h-[16.8px]">
        {name}
      </div>
      <div className="absolute top-[29px] left-[301px] text-2xs-4">
        {date}
      </div>
      <div className="absolute top-[20px] left-[102px] text-xl-5 font-semibold text-color">
        {role}
      </div>
      <div className="absolute top-[92px] left-[21px]">
        {description}
      </div>
      <div className="absolute top-[125px] left-[16px] h-[23px] flex flex-row items-center justify-center gap-[2px] text-limegreen">
        <img
          className="w-[23px] relative h-[23px]"
          alt=""
          src="/monetization-on@2x.png"
        />
        <div className="w-[92px] relative inline-block h-5 shrink-0">
          {salary}
        </div>
      </div>
      <div className="absolute top-[125px] left-[153px] flex flex-row items-center justify-start gap-[2px] text-color">
        <img
          className="w-[23px] relative h-[23px]"
          alt=""
          src="/location-on@2x.png"
        />
        <div className="w-[107px] relative inline-block h-5 shrink-0">
          {city}
        </div>
      </div>
      <img
        className="absolute top-[20px] left-[629px] w-7 h-7"
        alt=""
        src="/bookmarks@2x.png"
      />
      <button onClick={showJobsDetails} className="absolute top-[calc(50%_+_26px)] left-[calc(50%_+_229px)] rounded-[6.21px] bg-color h-9 flex flex-row items-center justify-center py-0 px-[9.9px] box-border text-mini-8 text-fafafa cursor-pointer">
        <div className="w-[72.6px] relative inline-block h-[24.2px] shrink-0 left-78px">
          Apply Now
        </div>
      </button>
      <div className="absolute top-[15px] left-[21px] rounded-[50%] bg-gainsboro-200 w-[65px] h-[65px]" />
    </div>
  </div>
  );
};

export default JobCard;

