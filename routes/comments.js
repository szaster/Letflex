const express = require("express");
const ensureAuth = require("../middleware");
const { Comment } = require("../models/Comment");
const router = express.Router();

router.get("/", [ensureAuth], async (req, res) => {
  try {
    const { movieId } = req.query;
    const data = await Comment.find({ movieId })
      .populate({ path: "author" })
      .sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.post("/", [ensureAuth], async (req, res) => {
  try {
    const { _id } = req.user;
    const { movieId, content } = req.body;
    const comment = new Comment({
      movieId,
      content,
      author: _id,
    });
    await comment.save();
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

module.exports = router;
