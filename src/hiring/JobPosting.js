import "./JobPosting.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


const PostAJob = () => {
  const navigate = useNavigate();

  const ToHiring = useCallback(()=>{
    navigate("/hiring-profile")
  } , [navigate])

  const ToJobs = useCallback(()=>{
    navigate("/jobs")
  } , [navigate])

  return (
    <div className="post-a-job">
      <div className="post-a-job1" style={{width: "132px" , height: "39px" , fontSize: "29.31px" , lineHeight: "38.98px" ,left: "690px"}} >Post a job</div>
      <div className="post-a-job-child" />
      <button className="skills-and-project-button1" onClick={ToJobs}>
        <div className="publish" style={{width: "174px" , height: "37.79px" , color: "white" , left: "57px" , top: "11px"}}>Publish</div>
      </button>
      <div className="go-back1" onClick={ToHiring}>Go back</div>
      <img
        className="post-a-job-item"
        loading="lazy"
        alt=""
        src="/group-2.png"
      />
      <div className="component-6-parent1">
        <div className="component-64">
          <div className="component-6-child1" />
        </div> 
        <input className="component-6-child1" placeholder="Title of role"  />
        {/* <div className="title-of-role">Title of role</div> */}
      </div>
      <div className="component-6-parent2">
        <div className="component-65">
          <div className="component-6-child2" />
        </div>
        <input className="component-6-child2" placeholder="Brief description about organization" />
        {/* <div className="brief-description-about">
          Brief description about organization
        </div> */}
      </div>
      <textarea
        className="post-a-job-inner"
        placeholder="Requirements, responsibilities and perks"
        rows={16}
        cols={34}
      />
      <div className="component-6-parent3">
        <div className="component-66">
          <div className="component-6-child3" />
        </div>
        <input className="component-6-child3" placeholder="Name of organization" />
        {/* <div className="name-of-organization1">Name of organization</div> */}
      </div>
      <div className="component-6-parent4">
        <div className="component-67">
          <div className="component-6-child4" />
        </div>
        <input className="component-6-child4" placeholder="Monthly stipend" />
        {/* <div className="monthly-stipend">Monthly stipend</div> */}
      </div>
      <div className="component-6-parent5">
        <div className="component-68">
          <div className="component-6-child5" />
        </div>
        <input className="component-6-child5" placeholder="Location" />
        {/* <div className="location">Location</div> */}
      </div>
    </div>
  );
};

export default PostAJob;