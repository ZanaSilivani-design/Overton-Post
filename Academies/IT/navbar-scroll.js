$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('zana');
  } else {
    $('.navbar').removeClass('zana');
  }
});
