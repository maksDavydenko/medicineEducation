$(document).ready(function () {
    $('.feedback-slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500,
        autoplaySpeed: 10000,
        autoplay: true,

        appendDots: $('.feedback-slider__list'),
    });
});


$('.js-feedback-slider__next-btn').on('click', function () {
    $('.feedback-slider__inner').slick('slickNext');

});


$('.js-feedback-slider__prev-btn').on('click', function () {
    $('.feedback-slider__inner').slick('slickPrev');

});

$('.feedback-slider-mobile--next').on('click', function () {
    $('.feedback-slider__inner').slick('slickNext');

});


$('.feedback-slider-mobile--prev').on('click', function () {
    $('.feedback-slider__inner').slick('slickPrev');

});





// $('.sliderSlick').on('init', function (slick) {
// var active = $('.sliderSlick .slick-active');
// var first = active.eq(0);
// var last = active.eq(active.length - 1);
// first.addClass('test');
// last.addClass('test');
// });

// $('.sliderSlick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.sliderSlick .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     active.removeClass('test')
//     first.addClass('test');
//     last.addClass('test');
// });


// let slider = 1;


//suctom buttons

// $('.js-gallery-slider__next-btn').on('click', function () {
//     $('.gallery__slider').slick('slickNext');

    // var num = $('.item-num-slide');
    // num.removeClass('item-num-slide_active');

    // slider = slider >= num.length ? 0 : slider;
    // slider++;

    // num[slider - 1].classList.add('item-num-slide_active');


    // console.log(slider)


// });



// $('.js-gallery-slider__prev-btn').on('click', function () {
//     $('.gallery__slider').slick('slickPrev');

    // var num = $('.item-num-slide');
    // num.removeClass('item-num-slide_active');

    // slider = slider <= 0 ? num.length : slider;
    // slider--;


    // num[slider].classList.add('item-num-slide_active');

    // console.log(slider)

    // curSlider.addClass('item-num-slide_active');
    // var active = $('.sliderSlick .slick-active');
    // var first = active.eq(0);
    // var last = active.eq(active.length - 1);
    // active.removeClass('test')
    // first.addClass('test');
    // last.addClass('test');

// });


// $('.sliderSlick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.slick-active');

// var slickSlide = $('.slick-slider');
// var first = active.eq(0);
// var last = active.eq(active.length - 1);

// active.removeClass('test');
// // slickSlide.removeClass('curSlider');


// var slides = document.querySelectorAll('.slick-slide');

// slides.forEach(slider => {
//     slider.classList.remove('curSlider');
// })

// var curSlide = document.querySelector('.slick-current');
// curSlide.classList.add('curSlider');

// first.addClass('test');
// last.addClass('test');
// var curSlide = $('.curSlide');
// curSlide.removeClass('curSlide');


// });


// $('.universities__slider').on('init', function (slick) {
//     var active = $('.universities__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     first.addClass('opacity');
//     last.addClass('opacity');
// });

// $('.universities__slider').on('init', function (slick) {
//     var active = $('.universities__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     first.addClass('test');
//     last.addClass('test');
// });

// $('.universities__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.slick-active');

//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);

//     active.removeClass('opacity');

//     first.addClass('opacity');
//     last.addClass('opacity');

// });


// $('.gallery__slider').on('init', function (slick) {
//     var active = $('.gallery__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     first.addClass('opacity');
//     last.addClass('opacity');
// });

// $('.gallery__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.gallery__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     active.removeClass('opacity')
//     first.addClass('opacity');
//     last.addClass('opacity');
// });

