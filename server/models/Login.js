import mongoose from "mongoose";
const Schema = mongoose.Schema;

const logInUserSchema = new Schema({
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
});

const UserLogin = mongoose.model('UserLogin', logInUserSchema);

export default UserLogin;
