import mongoose from "mongoose";
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    region: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true // Assuming email addresses should be unique
    },
    description: {
        type: String,
        required: true
    }
});

const Info = mongoose.model("Info", infoSchema);
export default Info;
