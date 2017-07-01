/**
 * Created by minyi on 2017/6/1.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mmfblog_v2');
mongoose.Promise = global.Promise;
module.exports = mongoose;