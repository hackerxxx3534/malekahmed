const express = require("express");
const router = express.Router();
const AppError = require("../utils/AppError");

// SUCCESS route
router.get("/success", (req, res) => {
  res.json({ message: "Success request working" });
});

// ERROR route (manual throw)
router.get("/error", (req, res, next) => {
  next(new AppError("This is a controlled error", 400));
});

// ASYNC ERROR route
router.get("/async-error", async (req, res, next) => {
  try {
    throw new Error("Async failure happened");
  } catch (err) {
    next(err);
  }
});

module.exports = router;