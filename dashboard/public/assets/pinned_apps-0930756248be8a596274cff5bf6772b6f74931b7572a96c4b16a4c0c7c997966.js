// app/javascript/pinned_apps.js
jQuery(function() {
  const SPINNER_HTML = `<div class="app-launcher-spinner"><div class="spinner-border" role="status"></div></div>`;
  function showSpinner(event) {
    const $selectedLauncher = $(event.currentTarget);
    $selectedLauncher.before(SPINNER_HTML);
    $(".app-launcher-container").addClass("app-launcher-disabled");
    $("[data-toggle='launcher-button']").removeClass("app-launcher-hover");
  }
  function hideSpinner() {
    $(".app-launcher-container").removeClass("app-launcher-disabled");
    $("[data-toggle='launcher-button']").addClass("app-launcher-hover");
    $("div.app-launcher-spinner").remove();
  }
  $("[data-toggle='launcher-button'] .launcher-click").each((index, element) => {
    const $launcherButton = $(element);
    $launcherButton.on("click", showSpinner);
  });
  $(window).on("pageshow", hideSpinner);
});
//# sourceMappingURL=/pun/sys/ood/assets/pinned_apps.js-11e7de9344481d784e2ac3916baf7ae13a4ee84b2a7a325c3070e5f8f4ec0af4.map
//!
;
