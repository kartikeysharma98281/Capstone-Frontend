import UserLogin from '../models/Login.js';
import UserSignUp from '../models/Signup.js';

/* SIGNUP */
export const signup = async (req, res) => {
  try {
    const {
     email, password, confirm_password
    } = req.body;
    
    if(password !== confirm_password){
     return res.status(400).json({msg : "Password didn't matched"})
    }
 
    const newUser = new UserSignUp({
     email, password, confirm_password
    });
 
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
 };
 
 /* LOGIN */
 export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserLogin.findOne({ email: email });
    
    if (!user) {
      return res.status(400).json({ msg: "User does not exist. " });
    }
 
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials. " });
    }
 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
 };
 
