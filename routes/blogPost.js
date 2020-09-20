const express = require("express");
const router = express.Router();
const { BlogPost } = require("../models/BlogPost");

// const { auth } = require("../middleware/auth");
const { auth } = require("../middleware");

router.get("/getBlogPosts", (req, res) => {
  BlogPost.find().exec((err, blogPosts) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, blogPosts });
  });
});

module.exports = router;
