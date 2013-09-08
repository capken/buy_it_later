
chrome.runtime.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  port.onMessage.addListener(function(info) {
    alert(JSON.stringify(info));
  });
});

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "content_script.js" });
});
