// app/javascript/config.js
"use strict;";
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function maxFileSize() {
  const cfgData = configData();
  if (cfgData["maxFileSize"].length == 0) {
    return parseInt(1073742e4, 10);
  } else {
    const maxFileSize2 = cfgData["maxFileSize"];
    return parseInt(maxFileSize2, 10);
  }
}
function transfersPath() {
  const cfgData = configData();
  const transfersPath2 = cfgData["transfersPath"];
  return transfersPath2;
}
function jobsInfoPath() {
  const cfgData = configData();
  return cfgData["jobsInfoPath"];
}
function csrfToken() {
  const csrf_token = document.querySelector('meta[name="csrf-token"]').content;
  return csrf_token;
}
function uppyLocale() {
  const cfgData = configData();
  return JSON.parse(cfgData["uppyLocale"]);
}
function isBCDynamicJSEnabled() {
  const cfgData = configData();
  return cfgData["bcDynamicJs"] == "true";
}
function xdmodUrl() {
  const cfgData = configData();
  const url = cfgData["xdmodUrl"];
  return url == "" ? null : url;
}
function analyticsPath(type) {
  const cfgData = configData();
  const basePath = cfgData["baseAnalyticsPath"];
  return `${basePath}/${type}`;
}
function bcPollDelay() {
  const cfgData = configData();
  return Number(cfgData["bcPollDelay"]);
}
function bcIndexUrl() {
  const cfgData = configData();
  return cfgData["bcIndexUrl"];
}
function statusPollDelay() {
  const cfgData = configData();
  return Number(cfgData["statusPollDelay"]);
}
function statusIndexUrl() {
  const cfgData = configData();
  return cfgData["statusIndexUrl"];
}
export {
  analyticsPath,
  bcIndexUrl,
  bcPollDelay,
  configData,
  csrfToken,
  isBCDynamicJSEnabled,
  jobsInfoPath,
  maxFileSize,
  statusIndexUrl,
  statusPollDelay,
  transfersPath,
  uppyLocale,
  xdmodUrl
};
//# sourceMappingURL=config.js.map
