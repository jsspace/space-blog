/**
 * Created by minyi on 2016/11/29.
 */
var mongoose = require('mongoose');
var Promise = require('bluebird');

var ArticleSchema = mongoose.Schema({
    title: String,
    url: String,
    abstract: String,
    content: String,
    tags:　[],
    createdAt: {
        type: Date,
        default: Date.now
    },
    visited: {
        type: Number,
        default: 0
    },
    is_delete: {
        type: Number,
        default: 0
    }
});

var Article = mongoose.model('article', ArticleSchema);
Promise.promisifyAll(Article);
Promise.promisifyAll(Article.prototype);

module.exports = post;