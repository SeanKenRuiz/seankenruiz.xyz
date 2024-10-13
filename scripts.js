// Run this on page load to show all items by default
filterSelection("all");

function filterSelection(category) {
  var elements = document.getElementsByClassName("column2");
  if (category === "all") category = ""; // If "all" is selected, show all items
  for (var i = 0; i < elements.length; i++) {
    w3RemoveClass(elements[i], "show");
    if (elements[i].className.indexOf(category) > -1) {
      w3AddClass(elements[i], "show");
    }
  }
}

function w3AddClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var arr1 = element.className.split(" ");
  while (arr1.indexOf(name) > -1) {
    arr1.splice(arr1.indexOf(name), 1);
  }
  element.className = arr1.join(" ");
}

// Highlight the active button
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
