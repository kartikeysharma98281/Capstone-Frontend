import { useMemo } from "react";
import "./Education.css";

const Education = ({ prop, propTop, propLeft }) => {
  const education2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);
 
  return (
    <section className="education-2" style={education2Style}>
      {/* <div className="div1">{prop=='2': <img src="/2.png" /> ? <img src="/3.png">}</div> */}
      <div className="div1">{prop === '2' ? <img src="/2.png" /> : <img src="/3.png" />}</div>
      <div className="frame-parent6">
        <div className="frame-parent7">
          <div className="component-6-parent7">
            <div className="component-612">
              {/* <div className="component-6-child3" /> */}
            </div>
            <div className="name-of-the2" style={{width: "373px"}}>
            <input className="component-6-child3" placeholder="Name of the Insititution" style={{width: "373px" , height: "44px"}} />
            </div>
          </div>
          <div className="component-6-parent8">
            <div className="component-613">
              {/* <div className="component-6-child4" /> */}
            </div>
            <div className="city-region4">
            <input className="component-6-child4" placeholder="City/Region" style={{width: "291px"}}/>
            </div>
          </div>
          <div className="component-6-parent9">
            <div className="component-614">
              {/* <div className="component-6-child5" /> */}
            </div>
            <div className="year-of-graduation1">
            <input className="component-6-child5" placeholder="Year of Graduation" style={{width: "249px", height: "44px"}} />
            </div>
            <img className="calendar-icon2" alt="" src="/calendar.png" style={{right: "27px"}} />
          </div>
        </div>
        <div className="frame-parent8">
          <div className="component-6-parent10">
            <div className="component-615">
              {/* <div className="second-degree-rectangle" /> */}
            </div>
            <div className="title-of-degree1">
            <input className="second-degree-rectangle" placeholder="Title of Degree" style={{width: "373px", height: "44px"}}/>
            </div>
          </div>
          <div className="component-6-parent11">
            <div className="component-616">
              {/* <div className="education-board-frame" /> */}
            </div>
            <div className="name-of-the3">
            <input className="component-6-child"  placeholder="Name of the Insitute" style={{width: "291px" ,height: "44px" , right: "42px"}} />
            </div>
          </div>
          <div className="component-6-parent12">
            <div className="component-617"> 
              {/* <div className="projects-frame" /> */}
            </div>
            <div className="percentage-cgpa-gpa1"><input className="component-6-item" placeholder="Percentage /CGPA /GPA" style={{width: "291px" ,right: "43px"}} /></div>
          </div>
        </div>
      </div> 
    </section>
  ); 
};

export default Education;