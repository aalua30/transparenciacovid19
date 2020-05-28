$('.slider-one')
.not("slick-intialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});
$('.slider-two')
.not("slick-intialized")
.slick({
    prevArrow: ".site-slider.two .prev",
    nextArrow: ".site-slider.two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000
});
$('.site-slider-two a').click(function(event){
    event.preventDefault();
    var link = $(this).attr('href');
    var posi = $(link).offset().top - 40;
    $('body,html').animate({scrollTop:posi},2000);
})
$('.link-site').click(function(event){
    event.preventDefault();
    var link = $(this).attr('href');
    var posi = $(link).offset().top - 40;
    $('body,html').animate({scrollTop:posi},2000);
})
