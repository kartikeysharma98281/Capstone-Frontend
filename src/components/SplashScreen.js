
import "./SplashScreen.css";

import { useNavigate } from 'react-router-dom';


const SplashScreen = () => {


  const navigate = useNavigate()
  const navigateToJobs = () => {
    navigate("/jobs")
  }
  const hiring = () => {
    navigate("/hiring-profile")
  }
  return (
    <div className="splash-screen" style={{top:"129px"}}>
      <div className="frame-parent3">
        {/* <img className="frame-inner" alt=""  /> */}
        <img
          className="frame-child1"
          loading="eager"
          alt=""
          src="/group-2.png"
          style={{    width: "474px"  , height: "236px"}}
        />
        <img
          className="discover-connect-succeed"
          loading="eager"
          alt=""
          src="/Discover, Connect, Succeed.png"
          style={{height: "34px" , opacity: "revert-layer"}}
        />

        {/* <div className="discover-connect-succeed">
          Discover, Connect, Succeed
        </div> */}
      </div>
      <div className="splash-screen-inner">
        <div className="work-nexus-is-designed-to-conn-parent">
          <div className="work-nexus-is">
            Work Nexus is designed to connect startups and companies with
            individual job seekers in India. It offers unique features like
            portfolio submissions, automated matching, and audio interviews to
            streamline the recruitment process.
          </div>
          <div className="frame-parent4">
            <button
              className="looking-for-job-wrapper"
              onClick={navigateToJobs}
              style={{paddingRight: "13px" , paddingLeft: "23px",paddingTop: "12px"}}
            >
              <div className="looking-for-job" style={{height: "33px" ,width: "106px"}}>Looking for Job</div>
            </button>
            <button className="im-hiring-wrapper" style={{paddingRight: "13px" , paddingLeft: "23px",paddingTop: "12px"}} onClick={hiring}>
              <div className="im-hiring" style={{height: "33px" ,width: "106px" , left: "16px"}} >I’m hiring</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SplashScreen;