import e from "express";
import mongoose from "mongoose";

const jobPostingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  organizationName: { 
    type: String,
    required: true
  },
  monthlyStipend: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const JobPosting = mongoose.model("JobPosting", jobPostingSchema);

export default JobPosting;
