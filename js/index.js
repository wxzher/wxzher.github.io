// jquery实现标题栏的切换
(function ($) {
    $(".navbar-nav>li").on("click", function () {
        $(this).siblings("li").removeClass("active").end().addClass("active")
        console.log("Ded");

    })


})(jQuery);    