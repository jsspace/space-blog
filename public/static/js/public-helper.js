define(['jquery', 'template'], function($,template) {
    return {
        initMethod: function(){
            template.helper('percentFormat', function(percentNum) {
                percentNum = Math.floor(percentNum * 100);
                return percentNum;
            });

        }
    };
});
