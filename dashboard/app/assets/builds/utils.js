// app/javascript/utils.js
function cssBadgeForState(state) {
  switch (state) {
    case "completed":
      return "bg-success";
    case "running":
      return "bg-primary";
    case "queued":
      return "bg-info";
    case "queued_held":
      return "bg-warning";
    case "suspended":
      return "bg-warning";
    default:
      return "bg-warning";
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function startOfYear() {
  const now = new Date();
  const past = new Date();
  past.setDate(1);
  past.setMonth(0);
  past.setFullYear(now.getFullYear());
  return `${past.getFullYear()}-${past.getMonth() + 1}-${past.getDate()}`;
}
function thirtyDaysAgo() {
  const now = new Date();
  const past = new Date();
  past.setDate(now.getDate() - 30);
  return `${past.getFullYear()}-${past.getMonth() + 1}-${past.getDate()}`;
}
function today() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}
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
export {
  bindFullPageSpinnerEvent,
  capitalizeFirstLetter,
  cssBadgeForState,
  startOfYear,
  thirtyDaysAgo,
  today
};
//# sourceMappingURL=utils.js.map
