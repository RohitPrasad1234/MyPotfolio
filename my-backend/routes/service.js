import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// GET ALL SERVICES
router.get("/", async (req, res) => {
  try {
    const data = await Service.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SAVE SERVICES
router.post("/", async (req, res) => {
  try {
    await Service.deleteMany();
    await Service.insertMany(req.body);

    res.json({ message: "Services saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
