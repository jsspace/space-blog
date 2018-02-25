/**
 * Created by minyi on 2017/8/8.
 */
var webpack = require('webpack');
var config = require('./webpack.prod.config.js');

webpack(config, function (err) {
    if (err) {
        throw err;
    } else {
        console.log('build success');
    }
});