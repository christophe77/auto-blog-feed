const express = require("express");
const articleController = require("../controllers/articleController");
const articleRouter = express.Router();

articleRouter.get("/", articleController.index)

articleRouter.get("/count", articleController.article_count)

articleRouter.get("/id/:id", articleController.article_detail)

articleRouter.get("/page/:page", articleController.article_list)

articleRouter.post("/", articleController.article_create_post)

articleRouter.post("/delete", articleController.article_delete_post)

module.exports = articleRouter;