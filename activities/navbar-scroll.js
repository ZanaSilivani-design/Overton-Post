$(window).scroll(function () {
  if ($(document).scrollTop() > 30) {
    $('.navbar').addClass('zana');
  } else {
    $('.navbar').removeClass('zana');
  }
});
