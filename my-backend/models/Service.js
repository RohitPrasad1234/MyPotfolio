import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  number: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true }
});

export default mongoose.model("Service", ServiceSchema);
