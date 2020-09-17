const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: String,
    },
    movieTitle: {
      type: String,
      required: true,
    },
    category: {
      action: {
        type: String,
      },
      comedy: {
        type: String,
      },
      drama: {
        type: String,
      },
      fantasy: {
        type: String,
      },
      horror: {
        type: String,
      },
      mystery: {
        type: String,
      },
      romance: {
        type: String,
      },
      triller,
    },
    blogContent: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
