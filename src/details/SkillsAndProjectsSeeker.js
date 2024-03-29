import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Education1 from "./Education1";
import ProgressBar1 from "./ProgressBar1";
import "./SkillsAndProjectsSeeker.css";

const SkillsAndProjectsSeeker = () => {
  const navigate = useNavigate();

  const onSkillsAndProjectButtonClick = useCallback(() => {
    navigate("/resume-and-portfolio-seeker");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/educationseeker");
  }, [navigate]);

  return (
    <div className="skills-and-projectsseeker">
      <div className="projects-minimum-2">Projects (minimum 2 projects)</div>
      <div className="skills-and-projectsseeker-child" />
      <button
        className="skills-and-project-button1"
        onClick={onSkillsAndProjectButtonClick}
      >
        <div className="resume-and-portfolio" style={{width:"142px" , left:"9px"}}>Resume and Portfolio</div>
        <img className="frame-parent-icon" alt="" src="/frame-parent.svg" />
      </button>
      <div className="go-back2" onClick={onGoBackTextClick}>
        Go back
      </div>
      <img
        className="skills-and-projectsseeker-item"
        loading="eager"
        alt=""
        src="/group-2.png"
      />
      <Education1 frameTitle="1" />
      <Education1 frameTitle="2" frameDivTop="466px" />
      <div className="education-3">
        <div className="parent">
          <div className="div"><img src="/3.png" /></div>
          <div className="frame-wrapper1">
            <div className="frame-parent1">
              <div className="frame-parent2">
                <div className="component-6-parent3">
                  <div className="component-66">
                    <div className="rectangle-div" />
                  </div>
                  {/* <div className="title-of-the">Title of the project</div> */}
                  <input
                    className="role-in-the"
                    placeholder="Title of the project"
                    type="text"
                    style={{left:"9px"}}
                  />
                </div>
                <div className="component-6-parent4">
                  <div className="component-67">
                    <div className="rectangle-div" />
                  </div>
                  <input
                    className="role-in-the"
                    placeholder="Role in the project"
                    type="text"
                    style={{left:"9px"}}
                  />
                </div>
              </div>
              <textarea
                className="frame-child"
                placeholder="Short description about project"
                rows={7}
                cols={34}
              />
            </div>
          </div>
        </div>
        <footer className="frame-footer">
          <div className="component-68">
            <div className="rectangle-div" style={{top:"30px"}} />
          </div>
          {/* <div className="link-of-website">
            Link of website/ Github/ prototype
          </div> */}
          <input
                    className="role-in-the"
                    placeholder="Link of website" 
                    type="text"
                    style={{top:"25px" , left: "10px"}}
                  />
        </footer>
      </div>
      <div className="group-div">
        <div className="component-69">
          <div className="component-6-child2" />
        </div>
        {/* <div className="search-languages-softwares"> */}
        <input className="search-languages-softwares" />
        <img className="frame-item" alt="" src="/Frame 34.png" />
        {/* </div> */}
      </div>
      <div className="skills-minimum-5">Skills (minimum 5 skills)</div>
      <ProgressBar1 />
    </div>
  );
};

export default SkillsAndProjectsSeeker;