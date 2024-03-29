import mongoose from "mongoose";
const Schema = mongoose.Schema;

const signInUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
  },
});

const UserSignUp = mongoose.model("UserSignUp", signInUserSchema);

export default UserSignUp;
