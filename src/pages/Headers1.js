import "./Headers1.css";

const Headers1 = () => {
  return (
    <div className="header1">
      <div className="header-item" />
      <div className="frame-parent">
        <div className="nexus-parent">
          <div className="nexus1">Nexus</div>
          <div className="line-separator" />
          <div className="work1">Work</div>
        </div>
        <div className="jobs-parent">
          <div className="jobs5">
            <div className="educate3">Jobs</div>
          </div>
          <div className="jobs6">
            <div className="educate4">Skill tests</div>
          </div>
          <div className="jobs7">
            <div className="educate5">Interviews</div>
          </div>
        </div>
      </div>
      <div className="application-frame1">
        <img
          className="bookmarks-icon1"
          loading="eager"
          alt=""
          src="/bookmarks1.svg"
        />
        <img
          className="application-icon1"
          loading="eager"
          alt=""
          src="/application1.svg"
        />
        <img
          className="notifications-icon1"
          loading="eager"
          alt=""
          src="/notifications1.svg"
        />
        <img
          className="profile-icon1"
          loading="eager"
          alt=""
          src="/profile1.svg"
        />
      </div>
    </div>
  );
}; 

export default Headers1;