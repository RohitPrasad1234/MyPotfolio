import express from "express";
import About from "../models/About.js";

const router = express.Router();

// GET DATA
router.get("/", async (req, res) => {
  const data = await About.findOne();
  res.json(data);
});

// INSERT DATA
router.post("/", async (req, res) => {
  const newAbout = new About(req.body);
  await newAbout.save();
  res.json({ message: "Saved!" });
});

export default router;
