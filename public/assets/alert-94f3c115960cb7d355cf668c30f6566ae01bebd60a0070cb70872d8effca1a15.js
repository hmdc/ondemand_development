// app/javascript/alert.js
function alert(message) {
  const div = alertDiv(message);
  const main = document.getElementById("main_container");
  main.prepend(div);
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
export {
  alert
};
//# sourceMappingURL=/pun/sys/ood/assets/alert.js-4c53ca7005362665fabc0990e09d3dd2715c8252467647b4449018f462c13cbc.map
//!
;
