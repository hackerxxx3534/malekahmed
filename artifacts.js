const express = require("express");
const router = express.Router();

// Mock data
const artifacts = [
  { id: 1, name: "Golden Mask of Tutankhamun" },
  { id: 2, name: "Rosetta Stone" },
  { id: 3, name: "Ankh Necklace" }
];

// GET all or filter using query
router.get("/", (req, res) => {
  const { name } = req.query;

  if (name) {
    const filtered = artifacts.filter(a =>
      a.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(artifacts);
});

// GET by ID (dynamic route)
router.get("/:id", (req, res) => {
  const artifact = artifacts.find(a => a.id == req.params.id);

  if (!artifact) {
    return res.status(404).json({ message: "Artifact not found" });
  }

  res.json(artifact);
});

module.exports = router;