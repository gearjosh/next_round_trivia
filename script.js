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
})

// Initial Page Load
const currentURL = window.location.href;
// const page = currentURL.split("#")[-1] || ""
if (currentURL.includes("hosts")) {
  $("#home").hide();
  $("#hosts").show();
} else {
  $("#hosts").hide();
  $("#home").show();
}