import CompanyDetails from "./CompanyDetails";
import "./CompanyDashboard.css";
import JobCard from "./JobCard";

const CompanyDashboard = () => {
  return (
    <div className="dashboard">
      <header className="main-container">
        <div className="content-area">
          <img
            className="content-area-child"
            loading="lazy"
            alt=""
            src="/group-2.png"
          />
          <div className="dashboard1">Dashboard</div>
        </div>
      </header>
      <div className="divider" />
      <main className="company-details-parent">
        <CompanyDetails />
        {/* <JobListings /> */}
        <div style={
          {
            width: "100%", // Adjust as needed
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // Two columns
  gap: "17px",
  padding: "10px",
  margin: "0px"
          }
        }>
        <JobCard
          name="TechGen Innovations"
          role="Data Analyst Intern"
          date="October 15, 2023"
          city="New York City, NY"
          salary="₹25000/month"
          description="Analyze and interpret data to provide actionable insights."
          // top="133px"  
        />
        <JobCard
          name="TechGen Innovations"
          role="Data Analyst Intern"
          date="October 15, 2023"
          city="New York City, NY"
          salary="₹25000/month"
          description="Analyze and interpret data to provide actionable insights."
          // top="133px"  
        />
        <JobCard
          name="TechGen Innovations"
          role="Data Analyst Intern"
          date="October 15, 2023"
          city="New York City, NY"
          salary="₹25000/month"
          description="Analyze and interpret data to provide actionable insights."
          // top="133px"  
        />
        </div>
      </main>
    </div>
  );
}; 

export default CompanyDashboard;