import React from "react";
// import styles from "../pages/JOBS.module.css"
// import { useNavigate } from 'react-router-dom';

// const JobCard = ({name , date , role , city , salary , description , top}) => {

//   const navigate = useNavigate();

//   const showJobsDetails = ()=>{
//     navigate("/job-details")
//   }


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

import "./JobCard.css";

const JobCard = ({name , date , role , city , salary , description }) => {
  return (
    <div className="job-descrip">
      <div className="frame-parent">
        <div className="frame-wrapper">
          <div className="ellipse-parent">
            {/* <div className="frame-child" /> */}
            <div className="frame-container">
              <div className="frame-group" style={{maxWidth: "117%"}}>
                <div className="data-analyst-intern-parent">
                  <div className="data-analyst-intern">{role}</div>
                  <div className="techgen-innovations-wrapper">
                    <div className="techgen-innovations" style={{fontSize: "15.7px"}}>
                    {name}
                    </div>
                  </div>
                </div>
                <div className="october-15-2023-wrapper">
                  <div className="october-15-2023">{date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="analyze-and-interpret-data-to-wrapper">
          <div className="analyze-and-interpret">
          {description}
          </div>
        </div>
        <div className="frame-div" >
          <div className="monetization-on-parent">
            <img
              className="monetization-on-icon"
              loading="lazy"
              alt=""
              src="/monetization-on@2x.png"
            />
            <div className="month-wrapper">
              <div className="month">{salary}</div>
            </div>
          </div>
          <div className="location-on-parent">
            <img
              className="location-on-icon"
              loading="lazy"
              alt=""
              src="/location-on@2x.png"
            />
            <div className="new-york-city-ny-wrapper">
              <div className="new-york-city">{city}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-descrip-inner">
        <div className="frame-parent1">
          <div className="bookmark-wrapper">
            <img
              className="bookmark-icon"
              loading="lazy"
              alt=""
              src="/bookmark@2x.png"
            />
          </div>
          <button className="component-4">
            <div className="apply-now">Apply Now</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;