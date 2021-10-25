$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('.header-bg').css('top', -(scrollTop * 0.4) + 'px');
    $('.salad-bg').css('top', -(scrollTop * 0.1) + 'px');
    $('.dessert-bg').css('top', -(scrollTop * 0.1) + 'px');


});