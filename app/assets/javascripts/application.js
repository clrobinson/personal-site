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
    var $infoWrapper = $(this).parent().siblings('.slick-info-wrapper');
    var $currentLi = $infoWrapper.find("[data-slick='" + currentSlide + "']");
    var $nextLi = $infoWrapper.find("[data-slick='" + nextSlide + "']");
    $currentLi.animate({opacity: 0}, 250, function() {
      $currentLi.addClass('hide');
      $nextLi.removeClass('hide').css('opacity', 0);
      $nextLi.animate({opacity: 1}, 250);
    });
  });

  $('.entry .head').on('click', function(e) {
    $(this).parent().toggleClass('active');
  });

});
