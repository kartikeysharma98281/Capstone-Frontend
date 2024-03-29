import "./ProgressBar1.css";

const ProgressBar1 = () => {
  return (
    <div className="progress-bar-3">
      <img className="vector-icon2" alt="" src="/Property1=70.png" />
      <div className="progress-bar-3-inner">
        <div className="component-41-parent">
          <img className="component-41-icon" alt="" src="/Property 1=green tick.png" />
          <div className="component-45-wrapper">
            <img
              className="component-45-icon"
              loading="eager"
              alt=""
              src="/Property 1=green tick.png"
            />
          </div>
          <img
            className="component-43-icon"
            loading="eager"
            alt=""
            src="/Property 1=skills.png"
          />
          <img
            className="component-47-icon"
            loading="eager"
            alt=""
            src="/Property 1=work portfolio.png"
          />
        </div>
      </div>
      <div className="component-33-parent">
        <div className="component-33">
          <div className="progress-bar-tracker">Info</div>
        </div>
        <nav className="search-field-parent">
          <div className="search-field">
            <div className="component-37">
              <div className="skill-tag">Education</div>
            </div>
          </div>
          <div className="component-35">
            <div className="language-logo">Skills and Projects</div>
          </div>
          <div className="component-39">
            <div className="framework-icon">Portfolio</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProgressBar1;