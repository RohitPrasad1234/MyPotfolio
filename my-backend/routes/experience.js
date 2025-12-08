import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

// GET WORK + EDUCATION
router.get("/", async (req, res) => {
  try {
    const data = await Experience.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SAVE (CLEAR + INSERT NEW)
router.post("/", async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: "Data must be an array" });
    }

    await Experience.deleteMany(); // Remove old experience
    await Experience.insertMany(req.body); // Insert fresh list

    res.json({ message: "Experience Updated Successfully!" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
