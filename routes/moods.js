// routes/moods.js
const express = require("express");
const router = express.Router();
const Mood = require("../models/Mood");

// POST mood
router.post("/", async (req, res) => {
  const { mood, date, userId } = req.body;
  try {
    const newMood = new Mood({ mood, date, userId });
    await newMood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET moods by user
router.get("/:userId", async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.params.userId }).sort({ date: 1 });
    res.status(200).json(moods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
