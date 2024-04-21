import { useMemo } from "react";
import "./Education1.css";
import "./SkillsAndProjectsSeeker.css";

const Education1 = ({ frameTitle, frameDivTop }) => {
  const education1Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div className="education-11" style={education1Style}>
      <div className="frame-parent9">
        <div className="frame-title">{frameTitle === "1" ? <img src="/1.png" /> : <img src="/2.png" />}</div>
        <div className="frame-wrapper2">
          <div className="frame-parent10">
            <div className="frame-parent11">
              <div className="component-6-parent13">
                <div className="component-618">
                  <div className="rectangle-div" style={{right:"237px"}}  />
                </div>
                {/* <div className="title-of-the1">Title of the project</div> */}
                <input
                    className="role-in-the"
                    placeholder="Title of the project"
                    type="text"
                    style={{right:"236px"}}
                  />
              </div>
              <div className="component-6-parent14"> 
                <div className="component-619" style={{width: "286px"}}>
                  <div className="rectangle-div" style={{right: "104px"}}/>
                </div>
                <input
                  className="role-in-the" 
                  placeholder="Role in the project"
                  type="text"
                  style={{right: "94px"}}
                />
              </div>
            </div>
            <textarea
              className="frame-textarea"
              placeholder="Short description about project"
              rows={7}
              cols={34}
              style={{right: "236px" , width: "681px" ,position: "relative"}}
            />
          </div>
        </div>
      </div>
      <div className="component-6-parent15"> 
        <div className="component-620">
          {/* <div className="component-6-child6" /> */}
          <div className="rectangle-div" style={{top:"30px"}} />
        </div>
        {/* <div className="link-of-website1">
          Link of website/ Github/ prototype
        </div> */}
        <input
                    className="role-in-the"
                    placeholder="Link of website"
                    type="text"
                    style={{top:"25px" , left: "10px"}}
                  />
      </div>
    </div>
  );
};

export default Education1;