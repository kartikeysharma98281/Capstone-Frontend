
import "./GroupComponent.css";

const GroupComponent = () => {
  
  return (
    <div className="contact-number-frame-parent">
      <div className="contact-number-frame">
        <div className="component-6-parent6">
          <div className="component-611">
            {/* <div className="last-name" /> */}
            <input
              className="last-name"
              placeholder="First name"
              type="text"
            />
          </div>
        </div>
        <div className="component2">
          <div className="component-7">
            {/* <div className="component-7-child" /> */}
            <input
              className="component-7-child"
              placeholder="Last name"
              type="text"
            />
          </div>
          {/* <div className="last-name1">Last name</div> */}
        </div>
      </div>
      <div className="city-region2">
        <div className="description-frame">
          <div className="education-frame1">
            <div className="component-8">
              {/* <div className="component-8-child" /> */}
              <input
                className="component-8-child"
                placeholder="Date of Birth"
                type="text"
              />
            </div>
            {/* <div className="date-of-birth">Date of Birth</div> */}
            {/* <img
              className="calendar-icon1"
              alt=""
              src="/calendar.png"
              style={{ top: "125px", left: "255px" }}
            /> */}
          </div>
          <div className="email-addr-frame">
            <div className="first-last-name-rectangle">
              <div
                className="component-11"
                
              >
                {/* <div className="profile-pic-rectangle" /> */}
              </div>
              {/* <div className="frame-component" style={{ top: "167px" }}>
                +91
              </div> */}
            </div>
            <div className="component-9-parent">
              <div className="component-9">
                {/* <div className="date-of-birth-calendar" /> */}
                <input
                  className="date-of-birth-calendar"
                  placeholder="Contact number"
                  type="text"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="description-frame1">
          <div className="component-11-parent">
            <div className="component-111" >
              <div className="component-11-child" />
              <input
                className="component-11-child"
                placeholder=""
                type="text"
              />
            </div>
            <div className="city-region3"></div>
          </div>
          <div className="component-10-parent">
            <div className="component-10">
              {/* <div className="component-10-child" /> */}
              <input
                className="component-10-child"
                placeholder="Email address"
                type="text"
             
              />
            </div>
            {/* <div className="email-address">Email address</div> */}
          </div>
        </div>
      </div>
      <div className="instance-component">
        <div className="component-12">
          {/* <div className="component-12-child" style={{top:"126px"}} /> */}
          <input
            className="component-12-child"
            type="text"
            placeholder="    Short description about yourself"
          
          
          />
        </div>
        <div className="short-description-text">
          <div className="short-description-about">
            {/* Short description about yourself */}
          </div>
        </div>
        <div className="words-maximum">{/* (80 words maximum) */}</div>
      </div>
    </div>
  );
};

export default GroupComponent;
