function ensureAuth(req, res, next) {
  const user = req.session.user;
  if (req.user) {
    return next();
  } else {
    res.status(401).send();
  }
}

module.exports = ensureAuth;
