const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "UserGoogle",
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
    },
    content: {
      type: String,
    },
    // upvotes: { type: Number, default: 0 },

    // downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
