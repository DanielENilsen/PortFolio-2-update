"use strict";

// links
var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var spaceXRockets = "https://api.spacexdata.com/v3/rockets";
var humanLanuchRocket = "https://api.spacexdata.com/v4/launches/latest";
var spaceXPastAndCurrectRockets = "https://api.spacexdata.com/v3/launches"; //Fetch nasa`s today image

fetch(todayImage).then(function (respone) {
  return respone.json();
}).then(function (todayImageResponse) {
  imageOfToday(todayImageResponse);
})["catch"](function (error) {
  return console.log(error);
}); //Fetch SpaceX latest rocket lanuch

fetch(humanLanuchRocket).then(function (respone) {
  return respone.json();
}).then(function (callBackRocket) {
  spaceXFunc(callBackRocket);
})["catch"](function (error) {
  return console.log(error);
}); //Fetch Spacex diffrect rockets

fetch(spaceXRockets).then(function (response) {
  return response.json();
}).then(function (spaceXRockets) {
  console.log(spaceXRockets);
  spaceXDiffRocketsFunc(spaceXRockets);
})["catch"](function (error) {
  return console.log(error);
}); //Fetch SpaceX past and currect rocket lanuch

fetch(spaceXPastAndCurrectRockets).then(function (respone) {
  return respone.json();
}).then(function (spaxeXPastAndCurrect) {
  console.log(spaxeXPastAndCurrect);
  pastAndCurrectFunc(spaxeXPastAndCurrect);
})["catch"](function (Error) {
  return console.log(Error);
}); // Nasa Functions

var imageOfToday = function imageOfToday(response) {
  document.getElementById('innerId').innerHTML += "<div class = \"scrollDiv\"><h3 class = \"col-12\"> ".concat(response.title, "</h3> <p class = \"col-12\"> ").concat(response.explanation, "</p></div>");
  document.getElementById('imageCol').innerHTML += "<img class = \"col-12\" src = ".concat(response.url, ">");
}; //  SpaceX latest rocket lanuch


var spaceXFunc = function spaceXFunc(response) {
  document.getElementById("innerImage").innerHTML += "<img class = \"col-12\" src = ".concat(response.links.flickr.original[2], ">");
  document.getElementById("innerIdTwo").innerHTML += "<p class = \"col-12\"> ".concat(response.details, "</p>");
}; // SpaceX diffrect rockets 


var spaceXDiffRocketsFunc = function spaceXDiffRocketsFunc(respone) {
  document.getElementById('gridIdOne').innerHTML += "<div class = \"card edigth\"><img class = \"card-img-top\" src = \"".concat(respone[0].flickr_images[0], "\"><div class=\"card-body\"><h3 >").concat(respone[0].rocket_name, "</h3><a class=\"btn btn-primary\" href = \"#\"> See more </a></div></div>");
  document.getElementById('gridIdTwo').innerHTML += "<div class = \"card edigth\"><img class = \"card-img-top\" src = \"".concat(respone[0].flickr_images[1], "\"><div class=\"card-body\"><h3  >").concat(respone[1].rocket_name, "</h3><a class=\"btn btn-primary\" href = \"#\"> See more </a></div></div>");
  document.getElementById('gridIdThree').innerHTML += "<div class = \"card edigth\"><img  class = \"card-img-top\" src = \"".concat(respone[0].flickr_images[1], "\"><div class=\"card-body\"><h3 >").concat(respone[2].rocket_name, "</h3><a class=\"btn btn-primary\" href = \"#\"> See more </a></div>");
}; // Past and Currect lanuch of SpaceX Function


var pastAndCurrectFunc = function pastAndCurrectFunc(respone) {
  for (var i = 0; i < respone.length; i++) {
    document.getElementById('spaceIdGrid').innerHTML += "<div class = \"card edigth spxGrid col-10 col-lg-4 col-xl-4\">\n                                                                <img class = \"card-img-top col-12\" src=\"".concat(respone[i].links.mission_patch_small, "\">\n                                                                <div class=\"card-body\">                                                                 \n                                                                    <h3 class = \"col-10 cardhear\">").concat(respone[i].rocket.rocket_name, "</h3>\n                                                                    <a class=\"col-12 btn btn-primary\" href = \"#\"> See more </a>                                                                                                                                                                                                              \n                                                                </div>\n                                                            </div>");
  }
};