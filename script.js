var interval;

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.type) {
        case "prettify":
            interval = setInterval(replaceImages, 100);
            break;
        case "stop":
            clearInterval(interval);
            break;
    }
});

function replaceImages() {
  // Find images by class: ghost-company
  var companies = document.getElementsByClassName("ghost-company");
  // Replace each default image with a new image
  for (var i = 0; i < companies.length; i++) {
    var img = document.createElement("img");
    img.setAttribute("src", "chrome-extension://idkpbgmhdfkjieckpmjfjeepceldjomj/images/company.png");
    img.setAttribute("alt", "Default company");
    companies[i].replaceWith(img);
  }
  // Find images by class: ghost-school
  var schools = document.getElementsByClassName("ghost-school");
  // Replace each default image with a new image
  for (var j = 0; j < schools.length; j++) {
    var img2 = document.createElement("img");
    img2.setAttribute("src", "chrome-extension://idkpbgmhdfkjieckpmjfjeepceldjomj/images/school.png");
    img2.setAttribute("alt", "Default school");
    schools[j].replaceWith(img2);
  }
}
