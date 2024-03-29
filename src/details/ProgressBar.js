import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <header className="progress-bar-1">
      <div className="vector-group">
        <img className="vector-icon1" alt="" src="/Property1=0.png" style={{left:"33px"}} />
        <div className="component-19-wrapper">
          <div className="component-19">
            <div className="text3">Info</div>
          </div>
        </div>
        <img className="component-15-icon" alt="" src="/Property 1=info.png" />
      </div>
      <div className="frame-parent5">
        <div className="component-18-wrapper">
          <img
            className="component-18-icon"
            loading="eager"
            alt=""
            src="/Property 1=education.png"
          />
        </div>
        <div className="component-20">
          <div className="root-container">Education</div>
        </div>
      </div>
      <div className="component-23-parent">
        <img
          className="component-23-icon"
          loading="eager"
          alt=""
          src="/Property 1=skills.png"
        />
        <div className="component-21">
          <div className="text4">Skills and Projects</div>
        </div>
      </div>
      <div className="component-24-parent">
        <img
          className="component-24-icon"
          loading="eager"
          alt=""
          src="/Property 1=work portfolio.png"
        />
        <div className="component-22">
          <div className="text5">Portfolio</div>
        </div>
      </div>
    </header>
  );
};

export default ProgressBar;