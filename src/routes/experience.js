// import express from "express";
// import Experience from "../models/Experience.js";

// const router = express.Router();

// // GET ALL EXPERIENCE
// router.get("/", async (req, res) => {
//   const data = await Experience.find();
//   res.json(data);
// });

// // SAVE Experience (Create or Update)
// router.post("/", async (req, res) => {
//   try {
//     await Experience.deleteMany(); // clear old records
//     await Experience.insertMany(req.body); // insert new list
//     res.json({ message: "Experience Updated Successfully!" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
