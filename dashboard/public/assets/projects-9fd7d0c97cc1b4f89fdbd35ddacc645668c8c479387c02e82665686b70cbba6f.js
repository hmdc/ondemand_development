// app/javascript/config.js
"use strict;";
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function jobsInfoPath() {
  const cfgData = configData();
  return cfgData["jobsInfoPath"];
}

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

// app/javascript/projects.js
jQuery(function() {
  $('[data-job-poller="true"]').each((_index, ele) => {
    pollForJobInfo(ele);
  });
  $("[data-bs-toggle='project']").each((_index, ele) => {
    updateProjectSize(ele);
  });
});
function pollForJobInfo(element) {
  const jobId = element.dataset["jobId"];
  const jobCluster = element.dataset["jobCluster"];
  const url = `${jobsInfoPath()}/${jobCluster}/${jobId}`;
  if (jobId === "" || jobCluster === "") {
    element.innerHTML = "";
    return;
  }
  fetch(url, { headers: { "Accept": "application/json" }, cache: "no-store" }).then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("404 response while looking for job", { cause: response });
      } else {
        throw new Error("Not 2xx response while looking for job", { cause: response });
      }
    } else {
      return response.json();
    }
  }).then((data) => {
    const state = data["state"];
    element.innerHTML = jobInfoDiv(jobId, state);
    if (state !== "completed") {
      setTimeout(pollForJobInfo, 3e4, element);
    }
  }).catch((error) => {
    element.innerHTML = jobInfoDiv(jobId, "undetermined", error.message, "Unable to find the job details");
  });
}
function jobInfoDiv(jobId, state, stateTitle = "", stateDescription = "") {
  return `<div class="job-info justify-content-center d-grid">
            <span class="me-2">${jobId}</span>
            <span class="job-info-title badge ${cssBadgeForState(state)}" title="${stateTitle}">${state.toUpperCase()}</span>
            <span class="job-info-description text-muted">${stateDescription}</span>
          </div>`;
}
function updateProjectSize(element) {
  const UNDETERMINED = "Undetermined Size";
  const $container = $(element);
  const projectPath = $container.data("url");
  $.ajax({
    url: projectPath,
    type: "GET",
    headers: {
      "Accept": "application/json"
    },
    success: function(projectData) {
      const projectSize = projectData.size === 0 ? UNDETERMINED : projectData.human_size;
      $container.text(`(${projectSize})`);
    },
    error: function(request, status, error) {
      console.log("An error occurred getting project size!\n" + error);
      $container.text(`(${UNDETERMINED})`);
    }
  });
}
//# sourceMappingURL=/pun/sys/ood/assets/projects.js-710b9d06a7b7e92a4f086abd89d033c4560b6827578320f39eb443626867b68a.map
//!
;
