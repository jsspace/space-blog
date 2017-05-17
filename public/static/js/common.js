define(['jquery'], function($) {
    return {
        getUrlParam: function(name, hash){ // 获取链接参数
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            if (hash) {
                var r = window.location.hash.substr(1).match(reg);
            } else {
                var r = window.location.search.substr(1).match(reg);
            }
            if (r !== null) {
                return unescape(r[2]);
            }else{
                return null;
            }
        }
    };
});
