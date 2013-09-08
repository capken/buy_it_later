
function textContentOf(elementId) {
  var element = document.getElementById(elementId);
  if(element != undefined) {
    return element.textContent;
  } else {
    return "";
  }
}

function attributeOf(elementId, attributeName) {
  var element = document.getElementById(elementId);
  if(element != undefined) {
    return element.getAttribute(attributeName);
  } else {
    return "";
  }
}

var productInfo = {
  "title": textContentOf("btAsinTitle"),
  "price": textContentOf("actualPriceValue"),
  "main_image": attributeOf("main-image", "src"),
  "source_url": location.href
};

alert(JSON.stringify(productInfo));

//chrome.runtime.connect().postMessage(additionalInfo);
