const express = require("express");
const ensureAuth = require("../middleware");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

router.get("/all", async (req, res) => {
  try {
    const { movieId } = req.query;
    const data = await Favorite.find({ movieId });
    //.populate({ path: "user" })
    // .sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.get("/", async (req, res) => {
  try {
    res.status(501).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.post("/", async (req, res) => {
  try {
    res.status(501).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.delete("/", async (req, res) => {
  try {
    res.status(501).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

module.exports = router;
