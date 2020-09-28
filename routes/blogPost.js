const express = require("express");
const router = express.Router();
const { BlogPost } = require("../models/BlogPost");

const ensureAuth = require("../middleware");

router.get("/getBlogPosts", (req, res) => {
  BlogPost.find()
    .populate("author")
    .exec((err, blogPosts) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).json({ success: true, blogPosts });
    });
});

router.delete("/deleteBlogPost/:id", (req, res) => {
  BlogPost.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ success: true });
  });
});

router.post("/newBlogPosts", [ensureAuth], (req, res) => {
  const blog = new BlogPost({
    author: req.user,
    title: req.body.title,
    body: req.body.body,
    date: req.createdAt,
    avatar: req.user.avatar,
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
