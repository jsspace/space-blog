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
    is_delete: Number,
    create_at: Date,
    visit: {
        type: Number,
        default: 0
    },
});

var Article = mongoose.model('article', ArticleSchema);
