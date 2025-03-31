// Event Listeners
$(".headeritem, .headeritemmobile, #contactUs").click(function () {
  const toShow = $(this).attr("href").slice(1) || "home";

  $(".headeritem").each(function () {
    const toHide = $(this).attr("href").slice(1) || "home";
    if (toHide != toShow) {
      $("#" + toHide).hide();
    }
  });
  $("#" + toShow).show();
  $("#mobileLinks").hide();
  $(window).scrollTop(
    $("body").offset({
      top: 0,
      behavior: instant,
    })
  );
});

$(".sublink").click(function () {
  $("#home").hide();
  $("#subscriptions").show();
  $(window).scrollTop(
    $("body").offset({
      top: 0,
      behavior: instant,
    })
  );
});

$("#subscribe").click(function () {
  window.open("https://nextroundtrivia.beehiiv.com/subscribe", "_blank");
});

$("#contactForm").submit(function () {
  $("#contactForm button").addClass("marginbottombig")
  $(".sending").show();
});

$("#hamburger").click(function () {
  const links = $("#mobileLinks");
  if (links.css("display") == "block") {
    links.css("display", "none");
  } else {
    links.css("display", "block");
  }
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
