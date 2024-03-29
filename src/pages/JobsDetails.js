import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./JobsDetails.css"

import Headers from "./Headers";

const JobsDetails = () => {
  const navigate = useNavigate();

  const onApplyButtonFrameClick = useCallback(() => {
    navigate("/login-jobs");
  }, [navigate]);


  return (
    <div className="jobs">
      <Headers />      
      <main className="apply-text">
        <section className="october-posted-text">
          <div className="inner-frame">
            <div className="data-analyst-intern-text">
              <div className="ellipse-shape">
                <div className="monetization-location-text" />
              </div>
              <div className="data-intern-frame">
                <div className="app-frame">
                  <div className="notifications-frame">
                    <div className="profile-frame">
                      <div className="data-analyst-intern">
                        Data Analyst Intern
                      </div>
                      <div className="techgen-innovations">
                        TechGen Innovations
                      </div>
                    </div>
                    <div className="requirements-frame">
                      <div className="monetization-frame">
                        <div className="location-text">
                          <img
                            className="monetization-on-icon"
                            loading="eager"
                            alt=""
                            src="/monetization-on@2x.png"
                            style={{top: "11px"}}
                          />
                          <div className="month" style={{fontSize: "19.47px" ,lineHeight: "17.92px" ,height: "11px"}}>₹25000/month</div>
                        </div>
                        <div className="location-text1">
                          <img
                            className="location-on-icon"
                            loading="eager"
                            alt=""
                            src="/location-on@2x.png"
                            style={{top: "7px"}}
                          />
                          <div className="new-york-city" style={{fontSize: "19.47px" ,top: "7px"}}>New York City, NY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="techgen-innovations-is" style={{width: "853px" ,height: "104px",fontSize: "19.54px"}}>
                    TechGen Innovations is a forward-thinking technology company
                    at the forefront of innovation, dedicated to transforming
                    industries through cutting-edge solutions. Established with
                    a vision to revolutionize the technological landscape, we
                    specialize in harnessing the power of emerging technologies
                    to drive progress and create impactful solutions for
                    businesses worldwide.
                  </div>
                </div>
                <div className="responsibilities-frame">
                  <div className="education-label">
                    <div className="what-youll-do-container">
                      <p className="what-youll-do" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "25.99px"}}>What you'll do</p>
                      <p className="the-data-analyst" style={{fontSize: "19.54px" ,width: "1034px"}}>
                        The Data Analyst Intern will dive into the world of data
                        analysis, gaining hands-on experience in collecting,
                        processing, and interpreting data. They will collaborate
                        with teams to understand real-world business problems,
                        apply statistical techniques to uncover insights, and
                        assist in producing reports that drive decision-making
                        within the organization.
                      </p>
                    </div>
                  </div>
                  <div className="responsibilities-data-collect-container">
                    <p className="responsibilities" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "25.99px"}}>Responsibilities</p>
                    <ol className="data-collection-and-analysis" style={{fontSize: "19.54px" ,width: "1034px"}}>
                      <li className="data-collection-and-analysis1" >
                        <span>
                          Data Collection and Analysis: Gather, clean, and
                          organize datasets for analysis purposes.
                        </span>
                      </li>
                      <li className="data-mining-and-interpretation">
                        <span>
                          Data Mining and Interpretation: Utilize statistical
                          methods and tools to extract meaningful insights from
                          data.
                        </span>
                      </li>
                      <li className="report-generation-create-repo">
                        <span>
                          Report Generation: Create reports and visualizations
                          to present findings and trends.
                        </span>
                      </li>
                      <li className="assist-in-decision-making-sup">
                        <span>
                          Assist in Decision Making: Support the team in making
                          data-driven decisions by providing analysis and
                          recommendations.
                        </span>
                      </li>
                      <li className="quality-assurance-ensure-the">
                        <span>
                          Quality Assurance: Ensure the accuracy and reliability
                          of data through validation and verification processes.
                        </span>
                      </li>
                      <li>
                        <span>
                          Collaboration: Work with cross-functional teams to
                          understand data needs and requirements.
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="requirements-education-pursu-container" style={{top: "64px"}}>
                    <p className="requirements" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "25.99px"}}>Requirements</p>
                    <ol className="education-pursuing-or-recentl" style={{fontSize: "19.54px" ,width: "1034px"}}>
                      <li className="education-pursuing-or-recentl1">
                        <span>
                          Education: Pursuing or recently graduated with a
                          degree in Statistics, Mathematics, Computer Science,
                          or related fields.
                        </span>
                      </li>
                      <li className="analytical-skills-strong-anal">
                        <span>
                          Analytical Skills: Strong analytical and
                          problem-solving abilities to handle complex datasets.
                        </span>
                      </li>
                      <li className="technical-proficiency-familia">
                        <span>
                          Technical Proficiency: Familiarity with data analysis
                          tools like Python, R, SQL, or Excel.
                        </span>
                      </li>
                      <li className="attention-to-detail-ability-t">
                        <span>
                          Attention to Detail: Ability to maintain precision and
                          accuracy while working with data.
                        </span>
                      </li>
                      <li className="communication-good-verbal-and">
                        <span>
                          Communication: Good verbal and written communication
                          skills to convey findings effectively.
                        </span>
                      </li>
                      <li>
                        <span>
                          Adaptability: Willingness to learn new tools and
                          methodologies in data analysis.
                        </span>
                      </li>
                    </ol>
                  </div>
                  <div className="perks-learning-opportunity-container" style={{top:"98px"}}>
                    <p className="perks">
                      <span className="perks1" style={{paddingBottom: "22px" ,fontSize: "26.54px" ,fontWeight: "600" ,lineHeight: "64.99px"}}>Perks</span>
                      <span>&nbsp;</span>
                    </p>
                    <ol className="learning-opportunity-exposure" style={{fontSize: "19.54px" ,width: "1034px"}}>
                      <li className="learning-opportunity-exposure1">
                        <span>
                          Learning Opportunity: Exposure to real-world data and
                          analytics projects, enhancing skills and knowledge.
                        </span>
                      </li>
                      <li className="mentorship-guidance-from-expe">
                        <span>
                          Mentorship: Guidance from experienced professionals in
                          the field.
                        </span>
                      </li>
                      <li className="networking-opportunities-to-c">
                        <span>
                          Networking: Opportunities to connect and collaborate
                          with industry experts and peers.
                        </span>
                      </li>
                      <li className="flexible-environment-a-dynami">
                        <span>
                          Flexible Environment: A dynamic and flexible work
                          culture that encourages creativity and innovation.
                        </span>
                      </li>
                      <li>
                        <span>
                          Stipend: A monthly stipend of 25,000 rupees to support
                          living expenses during the internship.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="apply-button-label">
              <div className="posted-text">
                <button
                  className="apply-button-frame"
                  onClick={onApplyButtonFrameClick}
                  style={{ left: "1223px" ,position: "absolute" ,top: "122px",width: "126px",height: "38px"}}
                >
                  <div className="apply">Apply</div>
                </button>
                <div className="posted-on-october" style={{width: "197px" ,height: "21px" ,fontSize: "16.01px" ,top: "57px"}}>
                  Posted on October 15, 2023
                </div>
              </div>
            </div>
          </div>
          <div className="apply-button" style={{width: "293px" ,position: "relative" ,top: "25px"}}>
            <button className="posting-info" onClick={onApplyButtonFrameClick} style={{height: "41px"}}>
              <div className="apply1">Apply</div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JobsDetails;