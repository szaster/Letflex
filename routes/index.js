const mainRouter = require("express").Router();
const commentRouter = require("./comment");
const favoriteRouter = require("./favorite");
// TODO: Each file from routes needs to be here

mainRouter.use(commentRouter);
mainRouter.use(favoriteRouter);

module.exports = mainRouter;
