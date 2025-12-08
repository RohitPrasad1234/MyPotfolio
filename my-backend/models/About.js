import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  title: String,
  description1: String,
  description2: String,
  description3: String,
  description4: String
});

export default mongoose.model("About", AboutSchema);
