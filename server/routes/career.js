const router = require("express").Router();
const Career = require("../models/Career");

// Recommend careers
router.post("/recommend", async (req, res) => {
  const { skills } = req.body;
 const careers = await Career.find({
  skills: { $in: skills }
}).limit(1);
  res.json(careers);
});

module.exports = router;