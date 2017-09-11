requirejs.config({
    baseUrl: 'js/app',
    paths:{
        jquery:'../lib/jquery-3.2.1.min',
        switcher:'switcher',
        totop:'totop',
        split:'split-page'
    }
});
requirejs(['jquery','switcher','totop','split'],function($,switcher,totop,split) {
    // console.log($);
    switcher({
        parent:$('.previewMode'),
        target:$('#changeid'),
        class:['lesson-list','lesson-list2']
    });

    totop({
        target: $(".gotop span.top"),
        showPosition: 200,
        speed:200
    })

    split({
        perPageNum:18,
        totleNUm:1000,
        showPage:7,
        totle:98
    })

    //搜索按钮点击事件
    $("#header .search-icon").click(function(){
        $("#header .searchbox").show();
    });
    $("#header .searchbox .close-icon").click(function(){
        $("#header .searchbox").hide();
    });

    
});