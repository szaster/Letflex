const mongoose = require("mongoose");

const UserGoogle = mongoose.model("UserGoogle", {
  id: String,
  name: {
    familyName: String,
    givenName: String,
  },
  displayName: String,
  photo: String,
});

module.exports = UserGoogle;
