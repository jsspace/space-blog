/**
 * Created by minyi on 2016/12/12.
 */
var mongoose = require('mongoose');
var Promise= require('bluebird');

var AnalyseSchema = mongoose.Schema({
    ip: String,
    city: String,
    meta: {
        visitAt: {
            type: Date,
            default: Date.now()
        }
    }
});

AnalyseSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.visitAt = Date.now();
    }
    next();
});

AnalyseSchema.statics = {
    createInfo: function (analyse, cb) {
        return this.create(analyse, cb);
    },
    countInfo: function () {
        return this.find({}).count();
    },
    findAll: function (cb) {
        return this.find({}).exec(cb);
    }
};

var analyse = mongoose.model('analyse', AnalyseSchema);
Promise.promisifyAll(analyse);
Promise.promisifyAll(analyse);

module.exports = analyse;