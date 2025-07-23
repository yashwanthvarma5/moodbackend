const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth");
const moodRoutes = require("./routes/moods");

const app = express();

// ✅ Updated CORS Configuration to allow local and deployed frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",                // local dev
      "https://moodfrontend-dszd.vercel.app"  // deployed frontend
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
