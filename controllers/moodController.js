const Mood = require("../models/Mood");

// @route   POST /api/moods
exports.addMood = async (req, res) => {
  const { mood, note } = req.body;
  const userId = req.userId;

  try {
    const newMood = new Mood({ userId, mood, note });
    await newMood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(500).json({ msg: "Failed to add mood", error: err.message });
  }
};

// @route   GET /api/moods
exports.getMoods = async (req, res) => {
  const userId = req.userId;

  try {
    const moods = await Mood.find({ userId }).sort({ date: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ msg: "Failed to get moods", error: err.message });
  }
};
