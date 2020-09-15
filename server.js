const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 5000;

const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "Old McDonald had a farm",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));

// Add routes, both API and view
app.use("/api/auth", routes.auth);
app.use("/api/user", routes.user);
app.use("/api/favorite", routes.favorite);

// index.html for all page routes    html or routing and naviagtion
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/letflex");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
