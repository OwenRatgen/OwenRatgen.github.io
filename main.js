AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});

$(document).ready(function () {
  $(".hover").on("touchstart touchend", function (e) {
    e.preventDefault();
    $(this).toggleClass("hover_effect");
  });
});
