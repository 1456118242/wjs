/**
 * Created by Administrator on 2017/3/12.
 */
'use strict';
$(function(){
    function resize(){
        //当文档加载完成后才会执行
        //data-img-lg来记录数据
        var windowWidh = $(window).width();
        //window.innerwidth  和 $(widow).width
        //判断 屏幕大还是小 根据 为 每一张  图适配
        var isSamllScreen = $(window).width();
        $('#main_ad>.carousel-inner>.item').each(function(i,item){
            var $item = $(item); //因为拿到的是 dom 对象 children
            var imgSrc  = $item.data(isSamllScreen ? 'image-lg':'image-xs');
            $item.css('backgroundImage','url('+imgSrc+')');
            //backgroundImage 必 须通过 url 来声明
            if (isSamllScreen){
                $item.html('<img src="'+imgSrc+'"/>')
            }else{
                $item.empty();
            }
        })//获取dom对象数组 $(ul)
    }
   $(window).on('resize',resize).trigger('resize');
    //jq 是练使 编程

});