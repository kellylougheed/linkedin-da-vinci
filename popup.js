window.onload = function() {
  var button = document.getElementById("button");
  button.onclick = function() {
    chrome.extension.sendMessage({
      type: "prettify"
    });
  }
  var stopButton = document.getElementById("stop");
  stopButton.onclick = function() {
    chrome.extension.sendMessage({
      type: "stop"
    });
  }
}
