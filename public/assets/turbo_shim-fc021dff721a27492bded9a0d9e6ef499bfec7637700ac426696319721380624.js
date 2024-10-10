// app/javascript/config.js
"use strict;";

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
export {
  pollAndReplace,
  replaceHTML
};
//# sourceMappingURL=/pun/sys/ood/assets/turbo_shim.js-efdb160a83095607b606a293ef8420ec55ba79ea0bd878f06571e50304b5a87f.map
//!
;
