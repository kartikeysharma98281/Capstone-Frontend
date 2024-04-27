  import { useCallback } from "react";
import "./HiringProfile.css";
import { useNavigate } from "react-router-dom";

const HiringProfile = () => {
  const navigate = useNavigate();

  const ToJobPosting = useCallback(()=>{
    navigate("/company-dashboard")
  } , [navigate])

  const ToMainPage = useCallback(()=>{
    navigate("/")
  } , [navigate])

  return (
    <div className="hiring-profile">
      <div className="complete-you-hiring">Complete you hiring profile</div>
      <div className="hiring-profile-child" />
      <div>
      <button className="skills-and-project-button" style={{top: "663px" ,left: "714px"}} onClick={ToJobPosting}>
        <div className="post-job" style={{width: "117.82px" , height: "53.79px"  ,fontSize: "13.65px" ,color: "white" , left: "34px" ,top: "8px"}}>Dasboard</div>
        <div className="skills-and-project-button-inner">
          <img className="frame-child" alt="" src="/Frame 32.png"  />
        </div>
      </button>
      <div className="go-back" onClick={ToMainPage}>Go back</div> 
      <img
        className="hiring-profile-item"
        loading="lazy"
        alt=""
        src="/group-2.png"
      />
      </div>
      <div className="education-1">
        <div className="frame-parent">
        <div style={{display: "flex" ,gap: "34px" , left: "-12px" , position: "relative"}}>
          <div className="component-6-parent">
            <div className="component-6">
              <div className="component-6-child" />
            </div>
            <input className="component-6-child" placeholder="Full Name" />
            {/* <div className="full-name">Full name</div> */}
          </div>
          <div className="component-6-group">
            <div className="component-61">
              <div className="component-6-item" />
            </div>
            <input
              className="name-of-organization"
              placeholder="Name of organization"
              type="text"
            />
          </div>
         </div>
        </div>
        <textarea
          className="education-1-child"
          placeholder="Brief description about organization you are working for"
          rows={7}
          cols={34}
        />
        <div className="component-6-container">
          <div className="component-62">
            <div className="component-6-inner" />
          </div>
          <input className="component-6-inner"  placeholder="Role at organization" />
          {/* <div className="role-at-organization">Role at organization</div> */}
        </div>
      </div>
      <div className="about-yourself">About yourself</div>
      <div className="ellipse-parent">
        {/* <div className="frame-item" /> */}
        <div className="frame-wrapperj">
          <div className="profile-photo-parent">
            <div className="profile-photo">Profile photo</div>
            <div className="frame-container">
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/border_color.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="component-9-parent">
        <div className="component-9">
          <div className="component-9-child" />
        </div>
        <input className="component-9-child" placeholder="Contact number" />
        {/* <div className="contact-number">Contact number</div> */}
      </div>
      <div className="component-11-parent">
        <div className="component-11">
          <div className="component-11-child" />
        </div>
        <div className="div">+91</div>
      </div>
      <div className="component-10-parent">
        <div className="component-10">
          <div className="component-10-child" />
        </div>
        <input className="component-10-child" placeholder="Email address" />
        {/* <div className="email-address">Email address</div> */}
      </div>
      <div className="group-div">
        <div className="component-63">
          <div className="rectangle-div" />
        </div>
        <input className="rectangle-div"  placeholder="EIN (Employer Identification Number) / CIN (Corporate Identification
          Number)"/>
        {/* <div className="ein-employer-identification">
          EIN (Employer Identification Number) / CIN (Corporate Identification
          Number)
        </div> */}
      </div>
    </div>
  );
};

export default HiringProfile;