// app/javascript/config.js
"use strict;";
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function statusPollDelay() {
  const cfgData = configData();
  return Number(cfgData["statusPollDelay"]);
}
function statusIndexUrl() {
  const cfgData = configData();
  return cfgData["statusIndexUrl"];
}

// app/javascript/turbo_shim.js
function replaceHTML(id, html) {
  const ele = document.getElementById(id);
  if (ele == null) {
    return;
  } else {
    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    const newHTML = tmp.querySelector("template").innerHTML;
    tmp.remove();
    ele.innerHTML = newHTML;
  }
}
function pollAndReplace(url, delay, id, callback) {
  fetch(url, { headers: { Accept: "text/vnd.turbo-stream.html" } }).then((response) => response.ok ? Promise.resolve(response) : Promise.reject(response.text())).then((r) => r.text()).then((html) => replaceHTML(id, html)).then(() => {
    setTimeout(pollAndReplace, delay, url, delay, id, callback);
    if (typeof callback == "function") {
      callback();
    }
  }).catch((err) => {
    console.log("Cannot retrieve partial due to error:");
    console.log(err);
  });
}

// app/javascript/system_status.js
jQuery(() => {
  pollAndReplace(statusIndexUrl(), statusPollDelay(), "system-status");
});
//# sourceMappingURL=/pun/sys/ood/assets/system_status.js-3b06145e40646d5d3fe076cce83e28353463f16367e42d7aae594a4b44a8abc6.map
//!
;
