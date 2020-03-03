$(document).ready(function() {
  $(".offer-slider-main-wrapper").slick({
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    dots: true,
    prevArrow: ".arrow-div-left",
    nextArrow: ".arrow-div-right"
  });
});
