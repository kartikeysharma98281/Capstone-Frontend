import { useCallback } from "react";
import GroupComponent from "./GroupComponent"
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./BasicDetailsSeeker.css";

const BasicDetailsseeker = () => {
  const navigate = useNavigate();

  const onEducationFrameClick = useCallback(() => {
    navigate("/educationseeker"); 
  }, [navigate]);
 
  const onGoBackTextClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]); 
 
  return (
    <div className="basic-detailsseeker">
      <div className="lets-get-you">Let’s get you started</div>
      <div className="group" />
      <div className="first-name-frame-parent">
        {/* <div className="first-name-frame"  /> */}
        <div className="frame-wrapper">
          <div className="profile-photo-parent">
            <div className="profile-photo">Profile photo</div>
            <img
              className="group-icon"
              loading="eager"
              alt=""
              src="/border_color.png"
            />
          </div>
        </div> 
      </div>
      <GroupComponent   /> 
      <button className="education-frame" onClick={onEducationFrameClick}>
        <div className="education">Education</div>
        <img className="text-frame-icon" alt="" src="/Frame 32.png" />
      </button>
      <div className="go-back" onClick={onGoBackTextClick}>
        Go back 
      </div>
      <img
        className="basic-detailsseeker-child"
        loading="eager"
        alt=""
        src="/group-2.png"
      />
      <ProgressBar />
    </div>
  );
};

export default BasicDetailsseeker;






