/**
 * Created by minyi on 2017/5/31.
 */
var mongoose = require('../mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

var CommentSchema = new Schema({
    article_id: String,
    user_id: String,
    username: String,
    email: String,
    content: String,
    create_at: String,
    is_delete: Number
});

var Comment = mongoose.model('comment', CommentSchema);
Promise.promisifyAll(Comment);
Promise.promisifyAll(Comment.prototype);

module.exports = Comment;