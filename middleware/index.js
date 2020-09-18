function ensureAuth(req, res, next) {
  const user = req.session.user;
  if (user) {
    return next();
  } else {
    res.redirect("/");
  }
}

module.exports = ensureAuth;
