import React from "react";
import styles from "../pages/JOBS.module.css"
import { useNavigate } from 'react-router-dom';

const JobCard = ({name , date , role , city , salary , description , top}) => {

  const navigate = useNavigate();

  const showJobsDetails = ()=>{
    navigate("/job-details")
  }


  return (
    <div className={styles.jobDescrip} style={{top: top}}>
      <div className={styles.techgenInnovations}>{name}</div>
      <div className={styles.october152023}>{date}</div>
      <div className={styles.dataAnalystIntern}>{role}</div>
      <div className={styles.analyzeAndInterpret}>
        {description}
      </div>
      <div className={styles.stipend}>
        <img
          className={styles.monetizationOnIcon}
          alt=""
          src="/monetization-on@2x.png"
        />
        <div className={styles.month}>{salary}</div>
      </div>
      <div className={styles.locationOnParent}>
        <img
          className={styles.monetizationOnIcon}
          alt=""
          src="/location-on@2x.png"
        />
        <div className={styles.newYorkCity}>{city}</div>
      </div>
      <img className={styles.bookmarkIcon} alt="" src="/bookmark@2x.png" />
      <div className={styles.component4} onClick={showJobsDetails} >
        <div className={styles.applyNow}>Apply Now</div>
      </div>
      <div className={styles.jobDescripChild} />
    </div>
  );
}; 

export default JobCard;
