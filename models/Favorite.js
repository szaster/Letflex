const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "UserGoogle",
    },
    movies: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
