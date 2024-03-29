import mongoose from "mongoose";
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  link: {
    type: String,
    required: true,
  }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
