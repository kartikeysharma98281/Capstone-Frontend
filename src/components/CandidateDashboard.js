import { useCallback } from "react";
import "./CandidateDashboard.css";
// import DashboardHeader from "./DashboardHeader";
import Headers from "../pages/Headers"

const CandidateDashboard = () => {
  
  const onSkillsAndProjectButtonClick = useCallback(() => {
    // Please sync "Resume and portfolio(seeker)" to the project
  }, []);

  return (<>
    <Headers />
    <div>
    <div className="logoButton">
    <img  src="./group-2.png" className="dashboard-logo"/>
    <button
        className="edit-button"
        onClick={onSkillsAndProjectButtonClick}
      >
      Edit Profile
        {/* <div className="edit-profile">Edit Profile</div> */}
        <div className="projects-button-wrapper">
          <img
            className="edit-icon"
            alt=""
            src="Frame 32.png"
          />
        </div> 
      </button>
      </div>
    <div className="details">
      <div className="name-john">Name : John</div>
      <div className="college-abc">{`College   :  ABC University  `}</div>
      <div className="degreemajor-btech">{`Degree/Major   :  B.Tech (Computer Science and Engineering)  `}</div>
      
      <div className="date-of-birth">Date of Birth : 5th , November,2002</div>
      <div className="cityregion-bhopal">City/Region : Bhopal , MP</div>
      <div className="contact-number">Contact Number  : +91-8967453563</div>
      <div className="email-id">{`Email id  :  abc@gmail.com  `}</div>
      <section className="description-it">{`Description  :  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.   `}</section>
      </div>
      <div className="ellipse-parent">
        {/* <div className="frame-child" style={{width: "201px"}} /> */}
        <span className="dot"></span>
          <div className="profile-photo-parent">
            <div className="profile-photo" style={{left:"0px" , top:"0px" , width: "100px"}}>Profile photo</div>
            <div className="frame-container">
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/border_color.png"
              />
            </div>
          </div> 
      </div>
      
      {/* <div style={{paddingBottom: "34px"}}>

      </div> */}
    </div>
    </>
  );
};

export default CandidateDashboard;