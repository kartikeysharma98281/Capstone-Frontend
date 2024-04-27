import "./JobPosting.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import axios from 'axios';

const PostAJob = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [monthlyStipend, setMonthlyStipend] = useState("");
  const [location, setLocation] = useState("");

  const ToHiring = useCallback(() => {
    navigate("/hiring-profile");
  }, [navigate]);

  // const ToJobs = useCallback( async () => {
  //   try {
      
  //     console.log(title, description, requirements, organizationName, monthlyStipend, location);
 
  //     const response = await axios.post('http://localhost:5000/job-posting', {
  //       title,
  //       description,
  //       requirements,
  //       organizationName,
  //       monthlyStipend,
  //       location
  //     });
  //     console.log(response.data);

      
  //   } catch (error) {
  //     console.log("Error from FE:", error.message);
  //   }

  //   console.log("Working");
  //   navigate("/jobs");
  // }, [navigate]);

  const ToJobs = async () => {
    try {
      
      console.log(title, description, requirements, organizationName, monthlyStipend, location);

      const response = await axios.post('http://localhost:5000/job-posting', {
        title,
        description,
        requirements,
        organizationName,
        monthlyStipend,
        location
      });
      console.log(response.data);

      
    } catch (error) {
      console.log("Error from FE:", error.message);
    }

    console.log("Working");
    navigate("/jobs");
  };

  return (
    <div className="post-a-job">
      <div
        className="post-a-job1"
        style={{
          width: "132px",
          height: "39px",
          fontSize: "29.31px",
          lineHeight: "38.98px",
          left: "690px"
        }}
      >
        Post a job
      </div>
      <div className="post-a-job-child" />
      <button className="skills-and-project-button1" onClick={ToJobs}>
        <div
          className="publish"
          style={{
            width: "174px",
            height: "37.79px",
            color: "white",
            left: "57px",
            top: "11px"
          }}
        >
          Publish
        </div>
      </button>
      <div className="go-back1" onClick={ToHiring}>
        Go back
      </div>
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
        <input
          className="component-6-child1"
          placeholder="Title of role"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="component-6-parent2">
        <div className="component-65">
          <div className="component-6-child2" />
        </div>
        <input
          className="component-6-child2"
          placeholder="Brief description about organization"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <textarea
        className="post-a-job-inner"
        placeholder="Requirements, responsibilities and perks"
        rows={16}
        cols={34}
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
      />
      <div className="component-6-parent3">
        <div className="component-66">
          <div className="component-6-child3" />
        </div>
        <input
          className="component-6-child3"
          placeholder="Name of organization"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
      </div>
      <div className="component-6-parent4">
        <div className="component-67">
          <div className="component-6-child4" />
        </div>
        <input
          className="component-6-child4"
          placeholder="Monthly stipend"
          value={monthlyStipend}
          onChange={(e) => setMonthlyStipend(e.target.value)}
        />
      </div>
      <div className="component-6-parent5">
        <div className="component-68">
          <div className="component-6-child5" />
        </div>
        <input
          className="component-6-child5"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PostAJob;
