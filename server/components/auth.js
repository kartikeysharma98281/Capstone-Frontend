import UserLogin from '../models/Login.js'
import UserSignUp from '../models/Signup.js';
import zod from 'zod';

/* SIGNUP */
const signupValidation = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
  confirm_password: zod.string().min(6),
})
export const signup = async (req, res) => {
 try {
  //  console.log("from server", req.body);
   const {
    email, password, confirm_password
   } = req.body;
   const isValidInput = signupValidation.safeParse(req.body);
   if(!isValidInput.success){
     return res.status(400).json({msg : "INVALID INPUTS"});
   }
   if(password !== confirm_password){
    res.status(400).json({msg : "Password didn't matched"})
   }

   const newUser = new UserSignUp({
    email, password, confirm_password
   });
   const savedUser = await newUser.save();
  //  const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

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
   if (!user) return res.status(400).json({ msg: "User does not exist. " });

   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
   delete user.password;
   res.status(200).json({ token, user });
 } catch (err) {
   res.status(500).json({ error: err.message });
 }
};

