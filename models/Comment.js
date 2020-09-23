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
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
