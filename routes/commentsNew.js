const express = require("express");
const ensureAuth = require("../middleware");
const router = express.Router();

// const { User } = require("../models/User");

router.get("/", [ensureAuth], (req, res) => {
  const { id } = req.user;
  res.status(501).send();
});

module.exports = router;
