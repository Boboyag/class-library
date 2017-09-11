define(['jquery'],function($) {

    /*

      分页插件
      {obj} options [分页属性]
      options参数详情：
      prePageNum:每页的数据量，选填，默认10
      totleNum:总的数据量，必填
      showPage:显示的页数，选填，默认7 ...
      
    */

    return function(options) {
        var opt = {};
        opt.perPageNum = options.perPageNum || 10;
        opt.showPage = options.showPage || 3;

        if (opt.showPage > 7) {opt.showPage = 7}

        var sp = $('#page-nav');

        sp.append('<div class="pgNext"><a href="#">首页</a></div>');
        sp.append('<div calss="pgNext" data-sp="prepage"><a href="#">上一页</a></div>');

        sp.append('<div class="pgNext"><a href="#">下一页</a></div>');
        sp.append('<div class="pgNext"><a href="#">末页</a></div>');
        sp.append('<div class="thpoint pagetotal">共 <span>' + parseInt(options.totle) +'</span> 页</div>');
        sp.append('<div class="thpoint pagenow">当前<input type="text" value="1" />页</div>');
        sp.append('<div class="pgNext go"><a href="#">确定</a></div>');

        var lists = $('<ul></ul>');
        lists.attr('data-sp','split-page');
        for(var i = 1; i <= opt.showPage; i++){
            lists.append('<li class="page-number"><a href="#"></a>' + i + '</li>');
        }
        lists.append('<li class="thpoint">...</li>');

        sp.find('[data-sp="prepage"]').after(lists);

        $("li.page-number").each(function(index){
            $(this).click(function(){
                $("li.page-number").removeClass("pgCurrent");
                $(this).addClass("pgCurrent");
            })
            
        });
    }
})