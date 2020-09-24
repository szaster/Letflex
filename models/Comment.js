const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Reference to author is required"],
    },
    postId: {
      type: String,
    },
    // responseTo: {
    //   type: Schema.Types.ObjectId,
    //   ref: "UserGoogle",
    // },
    movieId: {
      type: String,
      required: [true, "Reference to movie is required"],
    },
    content: {
      type: String,
      required: [true, "Content of a comment cannot be empty"],
    },
    // upvotes: { type: Number, default: 0 },

    // downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
