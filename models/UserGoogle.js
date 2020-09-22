const mongoose = require("mongoose");

const UserGoogle = mongoose.model("UserGoogle", {
  id: String,
  name: {
    familyName: String,
    givenName: String,
  },
  displayName: String,
  image: String,
  firstName: String,
  lastName: String,
});

module.exports = UserGoogle;
