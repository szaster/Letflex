const express = require("express");
const ensureAuth = require("../middleware");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

router.get("/all", async (req, res) => {
  try {
    const { _id } = req.user;
    const favorite = await Favorite.find({ user: _id });
    if (favorite) {
      res.status(200).json({ favorites: favorite.movies });
    } else {
      res.status(200).json({ favorites: [] });
    }
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.get("/", [ensureAuth], async (req, res) => {
  try {
    const { _id } = req.user;
    const { movieId } = req.query;
    const favorite = await Favorite.find({ user: _id });
    if (favorite) {
      res.status(200).json({ isFavorite: favorite.movies.includes(movieId) });
    } else {
      res.status(200).json({ isFavorite: false });
    }
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.put("/", [ensureAuth], async (req, res) => {
  try {
    const { _id } = req.user;
    const { movieId, isFavorite } = req.body;
    if (isFavorite) {
      const existingFavorite = await Favorite.findOne({ user: _id });
      if (!existingFavorite) {
        const favorite = new Favorite({
          user: _id,
          movies: [movieId],
        });
        await favorite.save();
      } else {
        existingFavorite.movies.push(movieId);
        await existingFavorite.save();
      }
    } else {
      const existingFavorite = await Favorite.findOne({ user: _id });
      if (!existingFavorite) {
        res.status(200).send();
      } else {
        existingFavorite.movies = existingFavorite.movies.filter(
          (movie) => movie !== movieId
        );
        await existingFavorite.save();
      }
    }
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

module.exports = router;
