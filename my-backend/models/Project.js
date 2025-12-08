import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  desc: { type: String },
  image: { type: String }, // store image URL or file path
});

export default mongoose.model("Project", ProjectSchema);
