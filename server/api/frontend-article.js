/**
 * Created by minyi on 2017/6/1.
 */
var mongoose = require('../mongoose');
var Article = mongoose.model('Article');
var Like = mongoose.model('Like');

exports.getList = (req, res) => {
    var by = req.query.by,
        id = req.query.id,
        key = req.query.key,
        limit = req.query.limit,
        page = req.query.page;
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);

    if (!page) page = 1;
    if (!limit) limit = 10;
    var data = {
            is_delete: 0
        },
        skip = (page - 1) * limit;
    if (key) {
        var reg = new RegExp(key, 'i');
        data.title = {$regex : reg};
    }
    var sort = '-update_date';
    if (by) {
        sort = '-' + by
    }
    var fields = 'title abstract category tags visit like comment_count create_date update_date is_delete';

    Promise.all([
        Article.find(data, fields).sort(sort).skip(skip).limit(limit).exec(),
        Article.countAsync(data)
    ]).then(([data, total]) => {
        res.render();
    });
};