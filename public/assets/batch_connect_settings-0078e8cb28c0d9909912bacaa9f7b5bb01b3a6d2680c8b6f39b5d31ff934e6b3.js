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
//# sourceMappingURL=/pun/sys/ood/assets/batch_connect_settings.js-4e06a56d1618b52014d03d34f1d60049402ccfd4a4469b1f9ffc955821fbddda.map
//!
;
