$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".fixed-top ").addClass("add-header-active ");
    } else {
        $(".fixed-top ").removeClass("add-header-active ");
    }
});




// sidebar
$(".side-btn").on('click', function() {
    $('body').toggleClass('side-Open');
});



// custom scrolll


(function($) {

    $(window).on("load ", function() {

        $(".scrollcustom ").mCustomScrollbar({
            theme: "inset-dark",
            axis:"y",           
            scrollButtons: {
                enable: true
            },
            mouseWheel: {
                enable: true
            },

        });

    });
})(jQuery);


(function($) {

    $(window).on("load ", function() {

        $(".scrollcustom-h").mCustomScrollbar({
            theme:"inset-dark",
            axis:"x",           
            scrollButtons: {
                enable: true
            },
            mouseWheel: {
                enable: true
            },

        });

    });
})(jQuery);



(function($) {

    $(window).on("load ", function() {

        $(".scrollcustom-list ").mCustomScrollbar({
            theme: "light-thin",
            axis:"y",           
            scrollButtons: {
                enable: true
            },
            mouseWheel: {
                enable: true
            },

        });

    });
})(jQuery);

