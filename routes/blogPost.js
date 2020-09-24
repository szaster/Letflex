const express = require("express");
const router = express.Router();
const { BlogPost } = require("../models/BlogPost");

// const { auth } = require("../middleware/auth");
const { auth } = require("../middleware");

router.get("/getBlogPosts", (req, res) => {
  BlogPost.find().exec((err, blogPosts) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    res.status(200).json({ success: true, blogPosts });
  });
});

router.post("/newBlogPosts", (req, res) => {
  // console.log(req.user);
  // console.log(req.body);
  const blog = new BlogPost({
    author: req.user,
    title: req.body.title,
    category: "category",
    body: req.body.body,
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
