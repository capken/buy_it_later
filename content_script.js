
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

function productPrice() {
  var price = textContentOf("actualPriceValue");
  if(price == "") {
    price = textContentOf("current-price");
  }

  return price;
}

function productImage() {
  var candidateIds = ["main-image", "prodImage"];
  for(var i = 0; i < candidateIds.length; i++) {
    var id = candidateIds[i];
    var imageSource = attributeOf(id, "src");
    if(imageSource != "") {
      return imageSource;
    }
  }

  return imageSrc;
}

var productInfo = {
  "title": textContentOf("btAsinTitle"),
  "price": productPrice(),
  "main_image": productImage(),
  "source_url": location.href
};

chrome.runtime.connect().postMessage(productInfo);
