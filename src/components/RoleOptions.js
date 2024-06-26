import { useCallback } from "react";
import "./RoleOptions.css";
import { useNavigate } from "react-router-dom";

const RoleOptions = () => {
  const navigate = useNavigate();
  const onPasswordInputsClick = useCallback(() => {
    // Please sync "Basic details(seeker)" to the project
    navigate("/basic-details-seeker");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Hiring profile" to the project
    navigate("/hiring-profile")
  }, [navigate]);

  return ( 
    <div className="choose-your-role" >
      <div className="choose-your-role-wrapper">
        <div className="choose-your-role1">Choose your role</div>
      </div>
      <div className="password-inputs-parent">
        <button className="password-inputs" onClick={onPasswordInputsClick}>
          <div className="for-candidates">{`For Candidates `}</div>
        </button>
        <button className="for-recruiter-wrapper" onClick={onFrameButtonClick}>
          <div className="for-recruiter">{`For Recruiter `}</div>
        </button>
      </div>
    </div>
  );
};

export default RoleOptions;