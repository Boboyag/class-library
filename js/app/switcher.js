// 点击切换模块
define(['jquery'],function($) {
    /*
     修改页面中的某个元素的class属性
     option [参数对象]
     option详情：
     parent:被点击元素的父级对象  jQuery element
     class：['',""] 用于修改的class列表，数组，注意顺序
     target：jq element --必填，被修改的元素
     opt{}对象放置默认的属性
    */

    return function(option) {
        var opt = {};
        opt.parent = option.parent ? option.parent : $('body');
        var radio = opt.parent.find('li');

        radio.each(function(index,element) {
            $(this).on('click',function(e) {
                option.class.forEach(function(element,index) {
                   option.target.removeClass(element); 
                });
                option.target.addClass(option.class[index]);
            });
        });
    }
});