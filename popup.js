
chrome.runtime.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  port.onMessage.addListener(function(info) {
    //document.getElementById("result").innerHTML = JSON.stringify(info);
    alert(JSON.stringify(info));
  });
});

chrome.tabs.executeScript(null, { file: "content_script.js" });
