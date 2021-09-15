$(function () {
  $('.openbtn').click(function () {
    if ($('navigation').hasClass('open')) {
      $('navigation').removeClass('open');
    } else {
      $('.openbtn').toggleClass('active');
      $('.nav_menu').fadeToggle(500);
    }
  });
});


$(document).ready(function () {
  $('.openbtn').on('click', function () {
    $('.nav_menu').toggleClass('active');
  });
});