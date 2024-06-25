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
//# sourceMappingURL=/pun/sys/ood/assets/dashboard.js-c551fce3f122c127686304394a904e0987bf9052230ae28d2085947f18596c3e.map
//!
;
