var $elementText = $('.comments');
var $elementAbout = $('.quick-navigation');

var $elementTextComent = $('.comments');
var $elementFooter = $('.footer');
var $checkUniverse = $('.check-universe');



let counterThis = 0;
let screenSize = $(window).width();
$(window).resize(function () {
    screenSize = $(window).width();

    console.log(screenSize)
})

if (screenSize > 1000) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var offsetAbout = $elementAbout.offset().top
        var offsetFooter = $elementFooter.offset().top;
        var offsercheckUniverse = $checkUniverse.offset().top;

        // console.log($(window).scrollTop())
        if (scroll < offsetAbout + $('.quick-navigation').height()) {
            $('.about-form').css('position', 'static');
            $('.about-form').css('margin-top', '0');
        }

        if (scroll > offsetAbout + $('.quick-navigation').height()) {
            $('.about-form').css('position', 'absolute');
            $('.comment-form').css('transition', '0.01s');
            $('.about-form').css('top', $(window).scrollTop() - $('.about-form').height() + 50);

        }

        if (scroll > offsercheckUniverse - $('.about-form').height() - 300) {
            $('.about-form').css('position', 'static');
            $('.about-form').css('margin-top', 'auto');
        }



        // comment-form
        //

        if (scroll < offsercheckUniverse) {
            $('.comment-form').css('position', 'static');
            $('.comment-form').css('margin-top', '0');
        }

        if (scroll > offsercheckUniverse) {
            $('.comment-form').css('position', 'absolute');
            $('.comment-form').css('right', '0');
            $('.comment-form').css('transition', '0.01s');
            $('.comment-form').css('top', $(window).scrollTop() - offsercheckUniverse - 100);

        }

        if (scroll > offsetFooter - $('.comment-form').height() - 300) {
            $('.comment-form').css('position', 'static');
            $('.comment-form').css('margin-top', 'auto');
        }



    });


}

