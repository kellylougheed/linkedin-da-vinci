window.onload = function() {

  var button = document.getElementById("button");
  var stopButton = document.getElementById("stop");

  button.onclick = function() {
    chrome.extension.sendMessage({
      type: "prettify"
    });
    button.classList.add("button-on");
    stopButton.classList.remove("button-on");
  }

  stopButton.onclick = function() {
    chrome.extension.sendMessage({
      type: "stop"
    });
    stopButton.classList.add("button-on");
    button.classList.remove("button-on");
  }

}
