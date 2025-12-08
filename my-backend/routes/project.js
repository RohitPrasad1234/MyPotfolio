import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET ALL PROJECTS
router.get("/", async (req, res) => {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SAVE (Replace all old + insert new)
router.post("/", async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: "Data must be an array" });
    }

    await Project.deleteMany();  
    await Project.insertMany(req.body);

    res.json({ message: "Projects updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
