chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "prettify":
            prettify();
            break;
        case "stop":
            stop();
            break;
    }
    return true;
});

function prettify() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "prettify"});
        chrome.browserAction.setBadgeText({text: "On"});
    });
}

function stop() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "stop"});
        chrome.browserAction.setBadgeText({text: "Off"});
    });
}
