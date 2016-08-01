// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){

  $(document).foundation();

  $('.slick').slick({
    dots: true,
    adaptiveHeight: true
  });

  $('.slick').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $wrapper  = $(this).parent();
    var $currentInfo = $wrapper.siblings("[data-slickinfo='" + currentSlide + "']");
    var $nextInfo = $wrapper.siblings("[data-slickinfo='" + nextSlide + "']");
    $currentInfo.animate({opacity: 0}, 250, function() {
      $currentInfo.addClass('hide');
      $nextInfo.removeClass('hide').css('opacity', 0);
      $nextInfo.animate({opacity: 1}, 250);
    });
  });

  $('.entry .head').on('click', function(e) {
    $(this).parent().toggleClass('active');
  });

  $('#nav-sandwich').on('click', function(e) {
    $('#nav').toggleClass('active');
    $('#nav-overlay').toggleClass('active');
  });

  $('#nav-overlay').on('click', function() {
    $(this).removeClass('active');
    $('#nav').removeClass('active');
  });

});
