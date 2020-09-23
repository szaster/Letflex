const express = require("express");
const ensureAuth = require("../middleware");
const { Comment } = require("../models/Comment");
const router = express.Router();

// const { User } = require("../models/User");

router.get("/", [ensureAuth], (req, res) => {
  Comment.find({ _id: comment._id })
    .populate("author")
    .sort({ createdAt: -1 })
    .then((comments) => res.json(comments));
  res.status(501).send();
  //
  //   const { id } = req.user;
  //   res.status(501).send();
});

router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const result = await comment.save();
    console.log(result);
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
  //     Comment.find({ _id: comment._id })
  //       .populate("author")
  //       .exec((err, result) => {
  //         if (err) return res.json({ success: false, err });
  //         return res.status(200).json({ success: true, result });
  //       });
});

module.exports = router;
