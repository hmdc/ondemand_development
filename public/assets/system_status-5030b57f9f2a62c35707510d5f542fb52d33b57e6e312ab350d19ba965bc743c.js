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

// app/javascript/utils.js
function setInnerHTML(element, html) {
  element.innerHTML = html;
  const scripts = Array.from(element.querySelectorAll("script"));
  scripts.forEach((currentElement) => {
    const newElement = document.createElement("script");
    Array.from(currentElement.attributes).forEach((attr) => {
      newElement.setAttribute(attr.name, attr.value);
    });
    const scriptText = document.createTextNode(currentElement.innerHTML);
    newElement.appendChild(scriptText);
    currentElement.parentNode.replaceChild(newElement, currentElement);
  });
}

// app/javascript/alert.js
function alert(message) {
  const div = alertDiv(message);
  const main = document.getElementById("main_container");
  main.prepend(div);
  div.scrollIntoView({ behavior: "smooth" });
}
function alertDiv(message) {
  const span = document.createElement("span");
  span.innerText = message;
  const div = document.createElement("div");
  div.classList.add("alert", "alert-danger", "alert-dismissible");
  div.setAttribute("role", "alert");
  div.appendChild(span);
  div.appendChild(closeButton());
  return div;
}
function closeButton() {
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.dataset.bsDismiss = "alert";
  const span = document.createElement("span");
  span.classList.add("sr-only");
  span.innerText = "Close";
  button.appendChild(span);
  return button;
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
    setInnerHTML(ele, newHTML);
  }
}
function pollAndReplace(url, delay, id, callback) {
  fetch(url, { headers: { Accept: "text/vnd.turbo-stream.html" } }).then((response) => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else if (response.status == 401) {
      return Promise.reject("This page cannot update becase you are no longer authenticated. Please refresh the page to log back in.");
    } else {
      return Promise.reject(response.text());
    }
  }).then((r) => r.text()).then((html) => replaceHTML(id, html)).then(() => {
    setTimeout(pollAndReplace, delay, url, delay, id, callback);
    if (typeof callback == "function") {
      callback();
    }
  }).catch((err) => {
    if (typeof err == "string") {
      alert(err);
    } else {
      alert("This page has encountered an unexpected error. Please refresh the page.");
    }
    console.log(err);
  });
}

// app/javascript/system_status.js
jQuery(() => {
  pollAndReplace(statusIndexUrl(), statusPollDelay(), "system-status");
});
//# sourceMappingURL=/pun/sys/ood/assets/system_status.js-aae87445944a4e31b1731a89133fbfe1350aad6568856e6c6b8656258cd781aa.map
//!
;
