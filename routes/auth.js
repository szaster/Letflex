const express = require("express");
require("dotenv").config();
const passport = require("passport");
const router = express.Router();

const ensureAuth = require("../middleware");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get("/google/callback", passport.authenticate("google"), function (
  req,
  res
) {
  req.session.user = req.user;
  if (process.env.NODE_ENV === "development") {
    res.redirect("http://localhost:3000/");
  }
  res.redirect("/");
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/user", ensureAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
