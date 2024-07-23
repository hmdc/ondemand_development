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
//# sourceMappingURL=apps.js.map
