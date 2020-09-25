const express = require("express");
const ensureAuth = require("../middleware");
const router = express.Router();

router.get("/", [ensureAuth], (req, res) => {
  const { id, firstName, image } = req.user;
  res.status(200).json({
    id,
    firstName,
    image,
  });
});

module.exports = router;
