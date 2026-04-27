require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/career", require("./routes/career"));

// Root route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Add multiple careers
const Career = require("./models/Career");

app.get("/add", async (req, res) => {
  await Career.create([
    {
      title: "Software Developer",
      skills: ["coding", "problem-solving"],
      description: "Builds applications and software"
    },
    {
      title: "Data Scientist",
      skills: ["python", "data analysis"],
      description: "Analyzes data and builds models"
    },
    {
      title: "UI/UX Designer",
      skills: ["design", "creativity"],
      description: "Designs user interfaces and experiences"
    },
    {
      title: "Doctor",
      skills: ["biology", "patient care"],
      description: "Treats patients and diagnoses diseases"
    },
    {
      title: "Teacher",
      skills: ["communication", "teaching"],
      description: "Educates students"
    },
    {
      title: "Mechanical Engineer",
      skills: ["mechanics", "problem-solving"],
      description: "Designs machines and systems"
    },
    {
      title: "Digital Marketer",
      skills: ["marketing", "social media"],
      description: "Promotes products online"
    },
    {
      title: "Cyber Security Analyst",
      skills: ["security", "networking"],
      description: "Protects systems from cyber threats"
    },
    {
      title: "Graphic Designer",
      skills: ["design", "photoshop"],
      description: "Creates visual designs and graphics"
    },
    {
      title: "Civil Engineer",
      skills: ["construction", "planning"],
      description: "Builds infrastructure like roads and bridges"
    }
  ]);

  res.send("Data added successfully ✅");
});

// Start server
app.listen(5000, () => console.log("Server running on 5000"));