// Event Listeners
$(".headeritem").click(function () {
  const toShow = $(this).attr("href").slice(1) || "home";

  $(".headeritem").each(function () {
    const toHide = $(this).attr("href").slice(1) || "home";
    if (toHide != toShow) {
      $("#" + toHide).hide()
    }
  })

  $("#" + toShow).show();
  window.scrollTop(0);
  // $("#" + toShow).scrollTop(0)
})

// Initial Page Load
const currentURL = window.location.href;
const page = currentURL.split("#")[1] || null;
if (page) {
  $("#home").hide();
  $("#" + page).show();
}