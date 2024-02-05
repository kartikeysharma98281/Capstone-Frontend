import { useState, useCallback } from "react";
import SignIn from "../components/SignIn";
import PortalPopup from "../components/PortalPopup";
import LogInPopup from "../components/LogInPopup";
import styles from "./JOBS.module.css";
import JobCard from "../components/JobCard";

const JOBS = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isLogInPopupOpen, setLogInPopupOpen] = useState(false);

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

  return (
    <>
      <div className={styles.jobs}>
        <JobCard
          name="TechGen Innovations"
          role="Data Analyst Intern"
          date="October 15, 2023"
          city="New York City, NY"
          salary="₹25000/month"
          description="Analyze and interpret data to provide actionable insights."
        />
      
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
          <div className={styles.signUpWrapper} onClick={openSignIn}>
            <div className={styles.signUp}>Sign up</div>
          </div>
          <div className={styles.logInWrapper} onClick={openLogInPopup}>
            <div className={styles.logIn}>Log in</div>
          </div>
        </div>
        <div className={styles.jobsParent}>
          <div className={styles.jobs1}>
            <div className={styles.lpa}>Jobs</div>
          </div>
          <div className={styles.jobs1}>
            <div className={styles.lpa}>Skill tests</div>
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
            />
            <input
              className={styles.cityRegionWrapper}
              placeholder="City/Region"
            />

            <input
              className={styles.annualSalaryEg1000000Wrapper}
              placeholder="Annual salary (eg: 1000000)"
            />

            <input
              className={styles.testScoreWrapper}
              placeholder="Test score"
            />
            <div className={styles.jobTypeParent}>
              <div
                className={styles.jobType}
                style={{ cursor: "pointer", left: "16px" }}
              >
                Job type
              </div>
              <div
                className={styles.jobType}
                style={{ cursor: "pointer", width: "70px" }}
              >
                Full-Time
              </div>
              <div
                className={styles.jobType}
                style={{ cursor: "pointer", right: "20px", width: "69px" }}
              >
                Internship
              </div>
            </div>
          </div>
          <div className={styles.component410} style={{ cursor: "pointer" }}>
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
