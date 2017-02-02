var scrollDown = function() {
  $("html, body").animate({
    scrollTop: $(document).height()-$(window).height()
  }, "slow");
}

var fadeTo = function(value) {
  $('#bottom').css("opacity", 0.6 * (1-value));
  $('#fade').css("opacity", value * 0.8);
  $('#overlay').css("opacity", value);
  if (value > 0.5) {
    $("#overlay span").css("pointer-events", "all");
  } else {
    $("#overlay span").css("pointer-events", "none");
  }
}

var scrollValue = function() {
  return ($(window).scrollTop() / $(window).height())/0.6;
}

//
$(function() {
  fadeTo(scrollValue());

  $("#bottom").on('click', function(event) {
    scrollDown();
  });

  $(window).on('scroll', function(event) {
    fadeTo(scrollValue());
  });

  window.onunload = function() {
    scrollTo(0,0)
  };
});

