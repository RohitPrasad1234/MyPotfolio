import mongoose from "mongoose";


const SkillSchema = new mongoose.Schema({
  title: String,
  skills: Array,
});

export default mongoose.model("Skill", SkillSchema);
