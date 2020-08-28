$(document).ready(function () {
  
///////////// mneu  ////////////////
$('.burger-menu').click(function () {
    $('.burger-menu, .menu').toggleClass('active')
})
//////////// carusel   /////////////
$(".owl-carousel1").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000
});
$(".owl-carousel.owl-carousel2").owlCarousel({
    items: 3,
    loop: false,
    nav: true,
    pagination: true
});
$('.slider-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots:false,
            arrows:false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
///////// tabs  //////////

$('.tab-item').click(function(){
  index = $(this).index();
  $('.tab-item').removeClass('active');
  $(this).addClass('active');
  $('.block-content').hide();
  $('.block-content').eq(index).show();
})
///////////blog-slider////////////
$('.blog-slider').owlCarousel({
  items:1,
  nav:true,
  navText: ["<img src='images/prev=left.png'>", "<img src='images/next.png'>"],
  loop:true,
});
})
