import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
	institution: {
		tenth: {
			name: { type: String },
			city: { type: String },
			passingYear: { type: String },
			titleOfDegree: { type: String },
			nameOfEducationBoard: { type: String },
			percentage: { type: String },
		},
		twelfth: {
			name: { type: String },
			city: { type: String },
			passingYear: { type: String },
			titleOfDegree: { type: String },
			nameOfEducationBoard: { type: String },
			percentage: { type: String },
		},
		college: {
			name: { type: String },
			city: { type: String },
			passingYear: { type: String },
			titleOfDegree: { type: String },
			nameOfEducationBoard: { type: String },
			percentage: { type: String },
		},
	},
});

const Education = mongoose.model("Education", EducationSchema);
export default Education;
