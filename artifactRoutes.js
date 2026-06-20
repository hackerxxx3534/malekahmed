const express = require("express");
const router = express.Router();
const Artifact = require("../models/Artifact");

// ❌ VULNERABLE SEARCH ROUTE
router.post("/search", async (req, res) => {
  const query = req.body;

  const results = await Artifact.find(query);

  res.json(results);
});

module.exports = router;