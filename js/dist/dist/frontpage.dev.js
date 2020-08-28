"use strict";

var windowInit = document.addEventListener("DOMContentLoaded", getQueryInit);

function getQueryInit() {
  var matchQuery = window.matchMedia("(min-width: 1200px)");

  if (matchQuery.matches) {
    alert("Worket");
  } else {
    console.log("Mobil");
  }
}