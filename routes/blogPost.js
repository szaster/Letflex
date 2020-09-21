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

router.get("/newBlogPosts", (req, res) => {
  const blog = new BlogPost({
    author: req.user,
    title: "The World's Highest-Paid Author of 2019",
    category: "Authors",
    body: "J.K. Rowling ($92 million)",
  });

  blog.save((err, blogpost) => {
    if (err) {
      return res.send({
        success: false,
        message: "Error: Server error.",
      });
    }
    return res.send({
      success: true,
      message: "done.",
    });
  });
});
module.exports = router;
