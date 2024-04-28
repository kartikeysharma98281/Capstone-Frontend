import { useCallback } from "react";
import "./CompanyDetails.css";
import { useNavigate } from "react-router-dom";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const onSkillsAndProjectButtonClick = useCallback(() => {
    // Please sync "Hiring profile" to the project
    navigate("/job-posting")
  }, [navigate]);

  const onSkillsAndProjectButton1Click = useCallback(() => {
    // Please sync "Post a job" to the project
    navigate("/job-posting")
  }, [navigate]);
 
  const editProfileButtonClick = useCallback(() => {
    navigate("/hiring-profile")
  },[navigate])

  return (
    <section className="company-details">
      <div className="contact-info-area">
        <div className="contact-info">
          <div className="name-container">
            {/* <img
              className="location-container-icon"
              loading="lazy"    
              alt=""
              src="/frame-44.svg"
            /> */}
            <span style={{ height: "200px" ,width: "200px" ,backgroundColor: "#bbb",borderRadius: "50%",display: "inline-block" , right:"57px" ,position: "relative" ,top: "-88px"}}></span>
          </div>
          <div className="contact-details">
            <button
              className="skills-and-project-button"
              onClick={editProfileButtonClick}
            >
              <div className="edit-profile">Edit Profile</div>
              <div className="profile-icon-area">
                <img className="profile-icon" alt="" src="/profile-icon.svg" />
              </div>
            </button>
            <div className="company-intro">
              <div className="company-description">
                <div className="name-techgen">Name : TechGen Innovations</div>
                <div className="location-new">Location : New York City, NY</div>
                <div className="contact-91-4858937584">
                  Contact : +91-4858937584
                </div>
                <div className="mail-techgengmailcom">
                  Mail : techgen@gmail.com
                </div>
                <div className="eim-35937384">EIM : 35937384</div>
              </div>
            </div>
          </div>
          <button className="rectangle-parent">
            <div className="frame-child" />
            <div className="job-openings">{`Job Openings `}</div>
          </button>
        </div>
      </div> 
      <div className="company-actions">
        <button
          className="skills-and-project-button1"
          onClick={onSkillsAndProjectButton1Click}
        >
          <div className="post-job">Post Job</div>
          <div className="company-logo">
            <img className="company-info-icon" alt="" src="/profile-icon.svg" />
          </div>
        </button>
        <div className="about-us" style={{    backgroundColor: "#F3F3F3" , alignItems: "flex-start"}}>
          {/* <div className="about-us-child" /> */}
          <div className="about-company-">About Company:-</div>
          <div className="techgen-innovations-is">
            TechGen Innovations is a forward-thinking technology company at the
            forefront of innovation, dedicated to transforming industries
            through cutting-edge solutions. Established with a vision to
            revolutionize the technological landscape, we specialize in
            harnessing the power of emerging technologies to drive progress and
            create impactful solutions for businesses worldwide.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;