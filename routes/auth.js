const express = require("express");
require("dotenv").config();
const passport = require("passport");
const router = express.Router();

const ensureAuth = require("../middleware/passport");

router.get(
  "/google",
  passport.authenticate(
    "google",
    {
      scope: ["email", "profile"],
    },
    function (req, res) {
      res.redirect("/");
    }
  )
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  }),
  function (req, res) {
    req.session.user = req.user;
    res.redirect("/");
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/user", ensureAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
