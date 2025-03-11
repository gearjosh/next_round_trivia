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
  $(window).scrollTop($("#header").offset({ top: 0 }));
});

$(".sublink").click(function () {
  $("#home").hide();
  $("#subscriptions").show();
  $(window).scrollTop($("#header").offset({ top: 0 }));
});

$("#subscribe").click(function () {
  window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
});

// Initial Page Load
const currentURL = window.location.href;
const page = currentURL.split("#")[1] || null;
if (page) {
  $("#home").hide();
  $("#" + page).show();
}
