// app/javascript/files/page_load.js
function setPageLoadState() {
  const configEle = document.getElementById("files_page_load_config");
  if (configEle === null) {
    return;
  }
  const data = configEle.dataset;
  history.replaceState({
    currentDirectory: data["currentDirectory"],
    currentDirectoryUrl: data["currentDirectoryUrl"],
    currentDirectoryUpdatedAt: data["currentDirectoryUpdatedAt"],
    currentFilesPath: data["currentFilesPath"],
    currentFilesUploadPath: data["currentFilesUploadPath"],
    currentFilesystem: data["currentFilesystem"]
  }, null);
}
export {
  setPageLoadState
};
//# sourceMappingURL=/pun/sys/ood/assets/files/page_load.js-544993ca5b228248a6de676e3a842e6e2307d38aa4a676c90821ca4f51cf23a8.map
//!
;
