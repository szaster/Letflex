function ensureAuth(req, res, next) {
  if (req.user) {
    return next();
  } else {
    res.status(401).send();
  }
}

module.exports = ensureAuth;
