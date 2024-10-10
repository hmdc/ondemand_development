// app/javascript/config.js
"use strict;";

// app/javascript/utils.js
function showSpinner() {
  $("body").addClass("modal-open");
  $("#full-page-spinner").removeClass("d-none");
}
function bindFullPageSpinnerEvent() {
  $(".full-page-spinner").each((index, element) => {
    const $element = $(element);
    if ($element.is("a")) {
      $element.on("click", showSpinner);
    } else {
      $element.closest("form").on("submit", showSpinner);
    }
  });
}

// app/javascript/batch_connect_settings.js
jQuery(function() {
  bindFullPageSpinnerEvent();
});
//# sourceMappingURL=/pun/sys/ood/assets/batch_connect_settings.js-a62949f92c066741be81acf74a55e2cd05458aecef2fec2d77164453f04e999c.map
//!
;
