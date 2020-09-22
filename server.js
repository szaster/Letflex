const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/letflex");

const passport = require("./config/passport");
const cookieSession = require("cookie-session");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["Old McDonald had a farm"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", routes.auth);
app.use("/api/user", routes.user);
// app.use("/api/favorite", routes.favorite);
app.use("/api/blogPost", routes.blogPost);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // app.use("/api/favorite", routes.favorite);

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

<<<<<<< HEAD
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/letflex", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  force: true,
});

=======
>>>>>>> 9d931f799e8ac90774da7ff87f12e459b860a8f6
// Start the API server
app.listen(PORT, function (err) {
  if (err) throw err;
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
