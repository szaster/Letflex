const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogPostSchema = new mongoose.Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
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
