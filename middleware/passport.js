const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const passport = require("passport");

const User = require("../models/UserGoogle");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await User.findOne({ id: profile.id });
      if (!existingUser) {
        const user = new User({
          id: profile.id,
          displayName: profile.displayName,
        });
        const result = await user.save();
        return done(null, { id: user.id });
      }
      return done(null, existingUser);
    }
  )
);

//Could be async if we wanted it to
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findOne({ id });
    if (!user) {
      return done(new Error("User not found"));
    }
    done(null, user);
  } catch (e) {
    done(e);
  }
});

function ensureAuth(req, res, next) {
  const user = req.session.user;
  if (user) {
    return next();
  } else {
    res.redirect("/");
  }
}

module.exports = ensureAuth;
