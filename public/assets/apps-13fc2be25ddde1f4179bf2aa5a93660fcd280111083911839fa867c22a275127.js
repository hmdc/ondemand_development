// app/javascript/config.js
"use strict;";
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function appsDatatablePageLength() {
  const cfgData = configData();
  return parseInt(cfgData["appsDatatablePageLength"]);
}

// app/javascript/apps.js
jQuery(function() {
  const pageLength = appsDatatablePageLength();
  $("#all-apps-table").DataTable({
    stateSave: false,
    pageLength
  });
});
//# sourceMappingURL=/pun/sys/ood/assets/apps.js-aa07e324648c419c95bf9f7847b02086975d20a0d191902304c2f9a80b0d5129.map
//!
;
