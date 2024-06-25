// app/javascript/config.js
"use strict;";
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function bcPollDelay() {
  const cfgData = configData();
  return Number(cfgData["bcPollDelay"]);
}
function bcIndexUrl() {
  const cfgData = configData();
  return cfgData["bcIndexUrl"];
}

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

// app/javascript/batch_connect_sessions.js
function settingKey(id) {
  return id + "_value";
}
function storeSetting(event) {
  var key = settingKey(event.currentTarget.id);
  var value = event.currentTarget.value;
  localStorage.setItem(key, value);
}
function tryUpdateSetting(name) {
  var saved_value = localStorage.getItem(settingKey(name));
  if (saved_value) {
    var selector = 'input[type="range"][name="' + name + '"]';
    $(selector).val(saved_value);
  }
}
function installSettingHandlers(name) {
  var selector = 'input[type="range"][name="' + name + '"]';
  $(selector).on("change", function(event) {
    storeSetting(event);
  });
}
window.installSettingHandlers = installSettingHandlers;
window.tryUpdateSetting = tryUpdateSetting;
jQuery(function() {
  if ($("#batch_connect_sessions").length) {
    pollAndReplace(bcIndexUrl(), bcPollDelay(), "batch_connect_sessions", bindFullPageSpinnerEvent);
  }
});
//# sourceMappingURL=/pun/sys/ood/assets/batch_connect_sessions.js-53c0e1219efec00c5207e16fe21d78e09b39b129652bcdd85c403eaad35a0317.map
//!
;
