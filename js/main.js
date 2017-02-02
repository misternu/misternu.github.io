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
  return Math.max(($(window).scrollTop() / $(window).height())/0.6, 0.01);
}

var scrollCheck = function() {
  fadeTo(scrollValue());
}

//
$(function() {
  scrollCheck();
  setInterval(scrollCheck, 39);

  $("#bottom").on('click', function(event) {
    scrollDown();
  });

  window.onunload = function() {
    scrollTo(0,0)
  };
});

