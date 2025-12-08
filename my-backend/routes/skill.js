import express from "express";
import skill from "../models/skill.js";


const router = express.Router();

// GET DATA
router.get("/", async (req, res) => {
  const data = await skill.findOne();
  res.json(data);
});

// INSERT DATA
router.post("/", async (req, res) => {
  const newskill = new skill(req.body);
  await newskill.save();
  res.json({ message: "Saved!" });
});

export default router;
