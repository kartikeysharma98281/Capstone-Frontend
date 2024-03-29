import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;
import mongoose from "mongoose";
import { signup } from './components/auth.js';
import { login } from './components/auth.js';
app.use(express.json());
app.use(cors());

app.get('/home', (req, res)=>{
   res.status(200).json({msg : "server is working"})
}) 

app.post('/login', login);
app.post('/signup', signup);

mongoose
  .connect("mongodb+srv://KartikeySharma:2fGK3qbeWFpDPWyq@cluster0.ldptiit.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  // mongodb+srv://KartikeySharma:2fGK3qbeWFpDPWyq@cluster0.ldptiit.mongodb.net/