/**
 * Created by minyi on 2017/5/31.
 */
var mongoose = require('../mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

var LikeSchema = new Schema({
    article_id: String,
    user_id: String,
    create_at: String,
});

var Like = mongoose.model('Like', LikeSchema);
Promise.promisifyAll(Like);
Promise.promisifyAll(Like.prototype);

module.exports = Like;