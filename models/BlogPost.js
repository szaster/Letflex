const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogPostSchema = new mongoose.Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "UserGoogle",
    },
    postId: {
      type: String,
    },
    avatar: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = { BlogPost };
