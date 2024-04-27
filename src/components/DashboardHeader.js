import "./DashboardHeader.css";
import styles from "../pages/JOBS.module.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard">
      {/* <div className="dashboard-child" /> */}
      <img
        className="dashboard-item"
        loading="lazy"
        alt=""
        src="/group-2.png"
      />
      <div style={{display: "flex"}}>
        <div className={styles.jobsParent} style={{ color: "#4F709C" }}>
          <div className={styles.jobs1}>
            <div className={styles.lpa}>Test Score</div>
          </div>
          <div className={styles.jobs1}>
            <div className={styles.lpa}>Skill Tests</div>
          </div>
          <div className={styles.jobs1}>
            <div className={styles.lpa}>Jobs</div>
          </div>
          <div className={styles.jobs1}>
            <div className={styles.lpa}>Interviews</div>
          </div>
        </div>
        <div className="dashboard-inner">
          <div className="frame-parent">
            <div className="bookmarks-wrapper">
              <img
                className="bookmarks-icon"
                loading="lazy"
                alt=""
                src="/bookmarks@2x.png"
              />
            </div>
            <div className="application-wrapper">
              <img
                className="application-icon"
                loading="lazy"
                alt=""
                src="/application@2x.png"
              />
            </div>
            <img
              className="notifications-icon"
              loading="lazy"
              alt=""
              src="/notifications@2x.png"
            />
          </div>
        </div>
        <img
              className="notifications-icon"
              loading="lazy"
              alt=""
              src="/profile.png"
              style={{left: "80px" , width: "26px"}}
              
            />
      </div>
    </div>
  );
};

export default DashboardHeader;
