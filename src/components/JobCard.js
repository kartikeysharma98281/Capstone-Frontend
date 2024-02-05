import React from "react";
import styles from "../pages/JOBS.module.css";


const JobCard = ({name , date , role , city , salary , description ,}) => {
  return (
    <div className={styles.jobDescrip}>
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
      <div className={styles.component4}>
        <div className={styles.applyNow}>Apply Now</div>
      </div>
      <div className={styles.jobDescripChild} />
    </div>
  );
};

export default JobCard;
