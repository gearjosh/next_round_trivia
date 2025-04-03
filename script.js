// Utility Functions

function changeTestimonials(n) {
  showTestimonials(testimonialIndex += n)
}

function currentTestimonial(n) {
  showTestimonials(testimonialIndex = n)
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testslide");
  let dots = document.getElementsByClassName("dot");
  if (n > testimonials.length) {
    testimonialIndex = 1;
  }
  if (n < 1) {
    testimonialIndex = slides.length;
  }
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" color5", "");
  }
  testimonials[testimonialIndex - 1].style.display = "flex";
  dots[testimonialIndex - 1].className += " color5"
}

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
  $("#faq").hide();
  $("#subscriptions").show();
  window.location.href = window.location.href.split("#")[0] + "#subscriptions"
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
let testimonialIndex = 1;
showTestimonials(testimonialIndex);
if (page) {
  $(".headeritem").each(function () {
    const toHide = $(this).attr("href").slice(1) || "home";
    if (toHide != page) {
      $("#" + toHide).hide();
    }
  });
  $("#" + page).show();
}
