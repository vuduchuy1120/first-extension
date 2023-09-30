chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Check if the URL has changed and the page has finished loading
  if (changeInfo.status === 'complete' && changeInfo.url) {
    // Log the URL change to the console
    alert('URL changed to: ' + changeInfo.url);
  }
});
