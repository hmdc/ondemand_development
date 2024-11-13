// app/javascript/config.js
"use strict;";
var CONFIG_ID = "ood_config";
function configData() {
  return document.getElementById(CONFIG_ID).dataset;
}
function rootPath() {
  const cfgData = configData();
  const rootPath2 = cfgData["rootPath"];
  if (rootPath2 == "/") {
    return rootPath2;
  } else {
    return rootPath2.substring(0, rootPath2.length - 1);
  }
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

// app/javascript/projects.js
jQuery(function() {
  $('[data-job-poller="true"]').each((_index, ele) => {
    pollForJobInfo(ele);
  });
  $("[data-bs-toggle='project']").each((_index, ele) => {
    updateProjectSize(ele);
  });
});
function jobDetailsPath(cluster, jobId) {
  const baseUrl = rootPath();
  const config = document.getElementById("project_config");
  const projectId = config.dataset["projectId"];
  return `${baseUrl}/projects/${projectId}/jobs/${cluster}/${jobId}`;
}
function pollForJobInfo(element) {
  const cluster = element.dataset["jobCluster"];
  const jobId = element.dataset["jobId"];
  if (cluster === void 0 || jobId === void 0) {
    return;
  }
  const url = jobDetailsPath(cluster, jobId);
  fetch(url, { headers: { Accept: "text/vnd.turbo-stream.html" } }).then((response) => response.ok ? Promise.resolve(response) : Promise.reject(response.text())).then((r) => r.text()).then((html) => {
    const currentData = element.querySelector(`#${element.id}_data`);
    let currentlyOpen = false;
    const responseElement = stringToHtml(html);
    if (currentData != null) {
      currentlyOpen = currentData.classList.contains("show");
    }
    if (currentlyOpen) {
      const dataDiv = responseElement.querySelector(`#${element.id}_data`);
      dataDiv.classList.add("show");
    }
    const jobStatus = responseElement.dataset["jobStatus"];
    if (jobStatus === "completed") {
      moveCompletedPanel(element.id, responseElement.outerHTML);
    } else {
      replaceHTML(element.id, responseElement.outerHTML);
    }
    return jobStatus;
  }).then((status) => {
    if (status != "completed") {
      setTimeout(pollForJobInfo, 3e4, element);
    }
  }).catch((err) => {
    console.log("Cannot not retrive job details due to error:");
    console.log(err);
  });
}
function stringToHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
function moveCompletedPanel(id, newHTML) {
  const oldElement = document.getElementById(id);
  if (oldElement !== null) {
    oldElement.remove();
  }
  const div = document.createElement("div");
  div.id = id;
  div.classList.add("col-md-4");
  const row = document.getElementById("completed_jobs");
  row.appendChild(div);
  replaceHTML(id, newHTML);
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
//# sourceMappingURL=/pun/sys/ood/assets/projects.js-81462f9633ef3106bf4265ceae4aa5d601391d150e64ba903920e20cc1587ebb.map
//!
;
