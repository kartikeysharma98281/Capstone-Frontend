import "./Headers.css";

const Headers = () => {
  return (
    <header className="header" style={{height: "51px"}}>
      <div className="header-child" />
      <div className="nexus-text">
        <div className="line">
          {/* <div className="nexus">Nexus</div> 
          <div className="jobs-educate-frame" />
          <div className="work">Work</div> */}
          <img src="/group-2.png" style={{width: "66px" ,position: "relative" ,left: "23px"}} />
        </div>
        <div className="application-frame">
          <div className="jobs2">
            <div className="educate">Jobs</div>
          </div>
          <div className="jobs3">
            <div className="educate1">Skill tests</div>
          </div>
          <div className="jobs4">
            <div className="educate2">Interviews</div>
          </div>
        </div>
      </div>
      <div className="monetization-data-frame" style={{position: "relative" ,right: "23px" }}>
        <img
          className="bookmarks-icon"
          loading="eager"
          alt=""
          src="/bookmarks@2x.png"
        />
        <img
          className="application-icon"
          loading="eager"
          alt=""
          src="/application@2x.png"
        />
        <img
          className="notifications-icon"
          loading="eager"
          alt=""
          src="/notifications@2x.png"
        />
        <img
          className="profile-icon"
          loading="eager"
          alt=""
          src="/profile.png"
        />
      </div>
    </header>
  );
};

export default Headers;