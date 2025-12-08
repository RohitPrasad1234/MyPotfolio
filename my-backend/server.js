import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import contactRoute from "./routes/contact.js";
// Import Routes
import aboutRoute from "./routes/about.js";
import experienceRoute from "./routes/experience.js";
import skillRoute from "./routes/skill.js";
import serviceRoute from "./routes/service.js";
import projectRoute from "./routes/project.js";

const app = express();
app.use(cors());
app.use(express.json());

// CONNECT MONGODB
mongoose
  .connect("mongodb+srv://rohit15p3_db_user:58NA2orF0q075N7O@cluster0.tawto3r.mongodb.net/myPortfolio")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ROOT TEST
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// USE ROUTES
app.use("/api/about", aboutRoute);
app.use("/api/experience", experienceRoute);
app.use("/api/skill", skillRoute);
app.use("/api/service", serviceRoute);
app.use("/api/project", projectRoute);
app.use("/api/contact", contactRoute);
// START SERVER


app.get("/", (req, res) => {
  res.send("Backend Running...");
});
app.listen(5000, () => console.log("Server running on port 5000"));
