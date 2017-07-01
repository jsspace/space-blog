/**
 * Created by minyi on 2017/4/5.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

var AdminSchema = new Schema({
    username: String,
    email: String,
    password: String,
    create_at: Date,
    is_date: Number
});

var Admin = mongoose.model('admin', AdminSchema);
Promise.promisifyAll(Admin);
Promise.promisifyAll(Admin.prototype);

module.exports = Admin;
