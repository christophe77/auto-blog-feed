const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    id: Number,
    title: String,
    text: String,
    thumbImage: String,
    metaImage: String,
})

const Product = mongoose.model('Article', ArticleSchema)

module.exports = Product