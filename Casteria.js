$('.slider').slick({
  autoplay: true,
  dots: true,
  slidesToShow: 2,
  autoplaySpeed: 900,
});

$('.accordion-header').click(function() {
  $('.accordion-header').not(this).next().slideUp();
  $('.accordion-header').not(this).removeClass('active');
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});