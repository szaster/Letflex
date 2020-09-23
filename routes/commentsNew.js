const express = require("express");
const ensureAuth = require("../middleware");
const { Comment } = require("../models/Comment");
const router = express.Router();

// const { User } = require("../models/User");

router.get("/", [ensureAuth], (req, res) => {
  Comment.find()
    .populate("author")
    .sort({ createdAt: -1 })
    .then((comments) => res.json(comments));
  res.status(501).send();
  //
  //   const { id } = req.user;
  //   res.status(501).send();
});

router.post("/saveComment", [ensureAuth], (req, res) => {
  const comment = new Comment(req.body);
});

module.exports = router;
