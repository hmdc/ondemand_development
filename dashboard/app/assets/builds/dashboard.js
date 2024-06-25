// app/javascript/dashboard.js
jQuery(function() {
  $("a[target=_blank]").on("click", function(event) {
    event.preventDefault();
    if (window.open($(this).attr("href")) == null) {
      const html = $("#js-alert-danger-template").html();
      const msg = "This link is configured to open in a new window, but it doesn't seem to have opened. Please disable your popup blocker for this page and try again.";
      $("div[role=main]").prepend(html.split("ALERT_MSG").join(msg));
    }
  });
});
//# sourceMappingURL=dashboard.js.map
