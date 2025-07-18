const express = require("express");
const router = express.Router();
const { addMood, getMoods } = require("../controllers/moodController");
const verifyToken = require("../middleware/authMiddleware");

// POST /api/moods
router.post("/", verifyToken, addMood);

// GET /api/moods
router.get("/", verifyToken, getMoods);

module.exports = router;
