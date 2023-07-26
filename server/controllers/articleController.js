require("dotenv").config();
const asyncHandler = require("express-async-handler");
const Article = require("../models/article");

const { ARTICLES_PER_PAGE } = process.env;

exports.index = asyncHandler(async (req, res, next) => {
  res.send("API endpoint");
});

// Display list of all articles.
exports.article_list = asyncHandler(async (req, res, next) => {
  const page = req.params.page;
  const articles = await Article.find({});
  if (articles) {
    const articleArray = [];
    articles.forEach(function (article, indexArticle) {
      const indexMin = page * ARTICLES_PER_PAGE;
      const indexMax = (page * ARTICLES_PER_PAGE) + ARTICLES_PER_PAGE;
      if (indexArticle > indexMin && indexArticle < indexMax) {
        articleArray.push(article);
      }
    });

    res.send(articleArray);
  } else {
    res.send([])
  }
});

// Get total articles
exports.article_count = asyncHandler(async (req, res, next) => {
  const articles = await Article.find({});
  if (articles) {
    res.send({ count: articles.length })

  } else {
    res.send({ count: 0 })
  }
});

// Display detail page for a specific article.
exports.article_detail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const article = await Article.findOne({ id });
  if (article) {
    res.send(article);
  } else {
    res.send({})
  }
});


// Handle article create on POST.
exports.article_create_post = asyncHandler(async (req, res, next) => {
  const { article } = req.body;
  const newArticle = new Article(article);
  await newArticle.save();
  res.send("saved");
});


// Handle article delete on POST.
exports.article_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: article delete POST");
});