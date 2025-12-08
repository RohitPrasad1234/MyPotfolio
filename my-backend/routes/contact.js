import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 465),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST → Save to DB + Send Email
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email & message required" });
    }

    // Save message to DB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Email format
    const mailOptions = {
      from: `"Portfolio Message" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Portfolio Contact Message",
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        <hr/>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) console.log("Email Error:", err);
    });

    res.json({ message: "Message sent successfully!" });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
