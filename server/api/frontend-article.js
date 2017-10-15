/**
 * Created by minyi on 2017/6/1.
 */
var Article = require('./db/article.js');

exports.getList = (req, res) => {
    var by = req.query.by,
        key = req.query.key,
        limit = req.query.limit,
        page = req.query.page,
        filter = {is_delete: 0},
        sort = '-createdAt',
        skip, reg;

    page = parseInt(page, 10) || 1;
    limit = parseInt(limit, 10) || 10;
    skip = (page - 1) * limit;

    if (key) {
        reg = new RegExp(key, 'i');
        filter.title = {$regex: reg};
    }
    if (by) {
        sort = '-' + by;
    }

    var fields = 'title url abstract tags visited like createdAt';

    Promise.all([
        Article.find(filter, fields).sort(sort).skip(skip).limit(limit).exec(),
        Article.count(filter)
    ]).then(([data, total]) => {
        var totalPage = Math.ceil(total / limit);
        var hasMore = page * limit < total;
        res.send({
            data: data,
            totalPage: totalPage,
            hasMore: hasMore,
            err_code: 0
        });
    });
};

// 获取单篇文章
exports.getItem = (req, res) => {
    var articleName = req.param.name;


};