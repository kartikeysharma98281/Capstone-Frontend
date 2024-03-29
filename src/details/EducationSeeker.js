import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Education from "./Education";
import "./EducationSeeker.css";

const Educationseeker = () => {
  const navigate = useNavigate();

  const onSkillsAndProjectButtonClick = () => {
    navigate("/skills-and-projects-seeker");
  };
  const onGoBackTextClick = useCallback(() => {
    navigate("/basic-details-seeker");
  }, [navigate]);

  return (
    <form className="educationseeker">
      <div className="education1">Education</div> 
      <div className="skills-projects-frame" />
      <button
        className="skills-and-project-button"
        onClick={onSkillsAndProjectButtonClick}
      >
        <div className="skills-and-projects" style={{width: "120px" , left: "9px"}}>Skills and Projects</div>
        <img
          className="frame-skills-projects"
          alt=""
          src="/frame-skills-projects.svg" 
        />
      </button>
      <div className="go-back1" onClick={onGoBackTextClick}>
        Go back
      </div>
      <img
        className="educationseeker-child"
        loading="eager"
        alt=""
        src="/group-2.png"
      />
      <section className="education-1">
        <div className="framework"><img src="/1.png" /></div>
        <div className="component">
          <div className="frame-parent">
            <div className="frame-group">
              <div className="component-6-parent">
                <div className="component-6">
                  {/* <div className="city-region" /> */}
                </div>
                <div className="name-of-the">
                <input className="component-6-child" placeholder="Name of the Insititution" style={{width: "373px" , height: "44px"}} />
                </div>
              </div>
              <div className="component-6-group">
                <div className="component-61">
                  {/* <div className="component1" /> */}
                </div>
                <div className="city-region1">
                  <input className="component1" placeholder="City/Region" style={{width: "291px"}}/>
                </div>
              </div>
              <div className="component-6-container">
                <div className="component-62">
                  {/* <div className="secondary-info-frame" /> */}
                </div>
                <div className="year-of-graduation">
                  <input className="secondary-info-frame" placeholder="Year of Graduation" style={{width: "249px", height: "44px"}} />
                </div>
                <img className="calendar-icon" alt="" src="/calendar.png" style={{right: "27px"}} />
              </div>
            </div>
            <div className="frame-container">
              <div className="frame-div">
                <div className="component-63">
                  {/* <div className="title-rectangle" /> */}
                </div>
                <div className="title-of-degree">
                  <input className="title-rectangle" placeholder="Title of Degree" style={{width: "373px", height: "44px"}}/>
                </div>
              </div>
              <div className="component-6-parent1">
                <div className="component-64">
                  {/* <div className="component-6-child" /> */}
                </div>
                <div className="name-of-the1">
                <input className="component-6-child"  placeholder="Name of the Education board" style={{width: "291px" ,height: "44px" , right: "42px"}} />                
                </div>
              </div>
              <div className="component-6-parent2">
                <div className="component-65">
                  {/* <div className="component-6-item" /> */}
                </div>
                <div className="percentage-cgpa-gpa">
                  <input className="component-6-item" placeholder="Percentage /CGPA /GPA" style={{width: "291px" ,right: "43px"}} />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <Education prop="2" />
      <Education prop="3" propTop="464px" propLeft="calc(50% - 466px)" />
      <header className="progress-bar-2">
        <div className="component-frame">
          <img className="component-29-icon" alt="" src="/Property 1=green tick.png" />
          <div className="component-25">
            <div className="text">Info</div>
          </div>
        </div>
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/Property 1=45.png" />
          <div className="cityregionframe">
            <div className="component-27">
              <div className="text1">Education</div>
            </div>
          </div>
          <img
            className="component-31-icon"
            loading="eager"
            alt=""
            src="/Property 1=education.png"
          />
        </div>
        <div className="component-frame1">
          <img
            className="component-30-icon"
            loading="eager"
            alt=""
            src="/Property 1=skills.png"
          />
          <div className="component-26">
            <div className="text2">Skills and Projects</div>
          </div>
        </div>
        <div className="skills-and-projects-frame">
          <img
            className="component-32-icon"
            loading="eager"
            alt=""
            src="/Property 1=work portfolio.png"
          /> 
          <div className="component-28">
            <div className="progressbarframe">Portfolio</div>
          </div>
        </div>
      </header>
    </form>
  );
};

export default Educationseeker;