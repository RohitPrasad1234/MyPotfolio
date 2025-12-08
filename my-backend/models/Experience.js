import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  year: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  desc: { type: String, required: true },
  section: { type: String, enum: ["work", "education"], required: true }
});

export default mongoose.model("Experience", ExperienceSchema);
