import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar2 from "./ProgressBar2";
import "./ResumeAndPortfolioSeeker.css";

const ResumeAndPortfolioSeeker = () => {
  const navigate = useNavigate();
 
  const onSkillsAndProjectButtonClick = useCallback(() => {
    // Please sync "JOBS" to the project
    navigate("/login-jobs");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/skills-and-projects-seeker");
  }, [navigate]);

  return (
    <div className="resume-and-portfolioseeker">
      <div className="portfolio" style={{ fontSize: "23px" }}>
        Portfolio
      </div>
      <div className="line-separator" />
      <button
        className="skills-and-project-button2"
        onClick={onSkillsAndProjectButtonClick}
      >
        <div className="save-and-continue" style={{ left: "8px" }}>
          Save and continue
        </div>
        <img className="progress-frame-icon" alt="" src="/progress-frame.svg" />
      </button>
      <div className="go-back3" onClick={onGoBackTextClick}>
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
      <div className="component-6-parent5" style={{ height: "34px" }}>
        <div className="component-610">
          {/* <div className="link-text" /> */}
          {/* <input placeholder="" /> */}
        </div>
        {/* <div className="link-of-portfolio"> */}
        <input
          className="link-text"
          placeholder="   Link of portfolio website"
        />
        {/* </div> */}
      </div>
      <ProgressBar2 />
      <div className="create-portfolio-btn">
      <a href="https://www.behance.net/" >
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
        <a href="https://www.squarespace.com/" >
        <img className="squarespace-icon" alt="" src="/Squarespace.png" />
        </a>
      </button>
      <button className="create-portfolio-btn3">
        <a href="https://www.wix.com/" >
        <img className="wix-icon" alt="" src="/Wix.png" />
        </a>
      </button>
    </div>
  );
};

export default ResumeAndPortfolioSeeker;
