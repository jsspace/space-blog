/**
 * Created by minyi on 2017/5/31.
 */
var mongoose = require('../mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

var UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    create_at: String,
    update_at: String,
    is_delete: Number,
});

var User = mongoose.model('user', UserSchema);
Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports = User;