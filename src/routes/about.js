// import express from "express";
// import About from "../models/About.js";

// const router = express.Router();

// // GET FIRST ABOUT
// router.get("/", async (req, res) => {
//   const data = await About.findOne();
//   res.json(data);
// });

// // SAVE ABOUT (Create or Update)
// router.post("/", async (req, res) => {
//   let about = await About.findOne();

//   if (about) {
//     // update
//     Object.assign(about, req.body);
//     await about.save();
//     return res.json({ message: "Updated Successfully" });
//   }

//   // create new
//   const newAbout = new About(req.body);
//   await newAbout.save();
//   res.json({ message: "Created Successfully" });
// });

// export default router;
