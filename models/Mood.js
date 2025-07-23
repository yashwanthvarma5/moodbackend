// models/Mood.js
const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mood: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Mood", moodSchema);
