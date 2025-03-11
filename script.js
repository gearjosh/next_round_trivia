// Event Listeners
$(".headeritem, #contactUs").click(function () {
  const toShow = $(this).attr("href").slice(1) || "home";

  $(".headeritem").each(function () {
    const toHide = $(this).attr("href").slice(1) || "home";
    if (toHide != toShow) {
      $("#" + toHide).hide();
    }
  });
  $("#" + toShow).show();
  $(window).scrollTop(
    $("#header").offset({
      top: 0,
      behavior: instant,
    })
  );
});

$(".sublink").click(function () {
  $("#home").hide();
  $("#subscriptions").show();
  $(window).scrollTop(
    $("#header").offset({
      top: 0,
      behavior: instant,
    })
  );
});

$("#subscribe").click(function () {
  window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
});

$("#contactForm").submit(function (e) {
  e.preventDefault();
  $(this).trigger("reset");
});

// Initial Page Load
const currentURL = window.location.href;
const page = currentURL.split("#")[1] || null;
if (page) {
  $(".headeritem").each(function () {
    const toHide = $(this).attr("href").slice(1) || "home";
    if (toHide != page) {
      $("#" + toHide).hide();
    }
  });
  $("#" + page).show();
}
