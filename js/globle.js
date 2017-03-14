/*
 * @Author: Administrator
 * @Date:   2016-07-18 11:43:52
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-18 11:44:25
 */

'use strict';
$(window).scroll(function() {
    // 获取超出浏览器的高度
    var top = $(window).scrollTop();
    // 如果当 页面向上滚动的高度超出一屏的高度，可以出现小火箭
    // alert($(window).height());
    // alert($(window).width());
    // 获取一屏的高度
    var sh = $(window).height();

    // 如果页面滚出的高度超过 一屏（667）  可以出现火箭了
    if (top > sh) {
        $('.fire').show();
    } else {
        $('.fire').hide();
    }

    // 点击fire 回到顶部
    $('.fire').click(function() {
        $('html,body').animate({ 'scrollTop': '0' }, 500);
    });

})
