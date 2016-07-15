$(function() {
  fadeTo(0);
  $("#bottom").on('click', function(event) {
    scrollDown();
  });
  $(window).on('scroll', function(event) {
    fadeTo(($(this).scrollTop() / $(window).height())/0.6);
  })
})

var scrollDown = function() {
  $("html, body").animate({
    scrollTop: $(document).height()-$(window).height()
  }, "slow");
}

var fadeTo = function(value) {
  $('#bottom').css("opacity", 0.6 * (1-value));
  $('#fade').css("opacity", value * 0.8);
  $('#overlay').css("opacity", value);
}
