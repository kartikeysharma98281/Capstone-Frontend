import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/home', (req, res) => {
   res.status(200).json({ msg: "server is working" });
});

mongoose
  .connect("mongodb+srv://KartikeySharma:2fGK3qbeWFpDPWyq@cluster0.ldptiit.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
