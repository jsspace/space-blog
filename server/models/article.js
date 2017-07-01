/**
 * Created by minyi on 2017/4/5.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

var ArticleSchema = new Schema({
    title: String,
    content: String,
    abstract: String,
    tags: [],
    link: String,
    create_at: Date,
    update_at: Date,
    is_delete: {
        type: Number,
        default: 0
    },
    visit: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    comment_count: {
        type: Number,
        default: 0
    },
});

var Article = mongoose.model('article', ArticleSchema);
Promise.promisifyAll(Article);
Promise.promisifyAll(Article.prototype);

module.exports = Article;
