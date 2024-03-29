import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
      institution: { 
        tenth: { type: String },
        twelth: { type: String },
        college: { type: String },
      },
      city:{
        tenth: { type: String },
        twelth: { type: String },
        college: { type: String },
      },
      passingYear:{
        tenth: { type: String },
        twelth: { type: String },
        college: { type: String },
      },
      titleOfDegree:{
        tenth: { type: String },
        twelth: { type: String },
        college: { type: String },
      },
      nameOfEducationBoard:{
        tenth: { type: String },
        twelth: { type: String },
        college: { type: String },
      },
      percentage:{
        tenth: { type: String },
        twelth: { type: String },
        college: { type: String },
      },

});

const Education = mongoose.model("Education", EducationSchema);
export default Education;