"use strict";

var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var spaceXRockets = "https://api.spacexdata.com/v3/rockets";
var humanLanuchRocket = "https://api.spacexdata.com/v4/launches/latest";
var spaceXPastAndCurrectRockets = "https://api.spacexdata.com/v3/launches/";
var apollo = "https://images-api.nasa.gov/search?q=apollo%2011...";
var marsImage = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9';

function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var linkid = getQueryStringValue("id");
var fligth_number = getQueryStringValue('flight_number');
var innerhtml = document.getElementById('innerhtml');

if (linkid === "value1") {
  fetch(spaceXRockets).then(function (reponsive) {
    return reponsive.json();
  }).then(function (spaceXRocet) {
    displaySpaceXRocket(spaceXRocet);
    console.log(spaceXRocet);
  })["catch"](function (error) {
    return console.log(error);
  });

  var displaySpaceXRocket = function displaySpaceXRocket(reponsive) {
    for (var i = 0; i < reponsive.length; i++) {
      innerhtml.innerHTML += "<div class = \"inner\"><img src=".concat(reponsive[i].flickr_images[i], "</div>");
    }
  };
}

if (linkid === "value2") {
  fetch(apollo).then(function (reponsive) {
    return reponsive.json();
  }).then(function (apollo) {
    console.log(apollo);
    apolloEleven(apollo);
  })["catch"](function (error) {
    return console.log(error);
  });

  var apolloEleven = function apolloEleven(reponsive) {
    for (var i = 0; i < 10; i++) {
      innerhtml.innerHTML += "<div class = \"apolloDiv\"><p>".concat(reponsive.collection.items[i].data[0].description, "</p></div>");
    }
  };
}

if (linkid === "value3") {
  fetch(marsImage).then(function (reponsive) {
    return reponsive.json();
  }).then(function (marsImageCurrent) {
    console.log(marsImageCurrent);
    marsImg(marsImageCurrent);
  })["catch"](function (error) {
    return console.log(error);
  });

  var marsImg = function marsImg(reponsive) {
    innerhtml.innerHTML += " <div class=\"container-fluid\">\n                                    <h1 class = \"h1inner\">Images of Mars</h1>                                \n                                    <div id = \"inx\" class = \"row\"></div>\n                                </div>";

    for (var i = 0; i < 4; i++) {
      document.getElementById('inx').innerHTML += "\n                                            <div class = \"col-lg-3 col-xl-3 gridEdit\">\n                                                <div class = \"card col-lg-12 col-xl-12\">\n                                                    <div class = \"card__edith\">\n                                                        <div class = \"img-square-wrapper\">\n                                                            <img class = \"card-img-top\" src = \"".concat(reponsive.photos[i].img_src, "\">\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"card-body\">\n                                                        <h3 class=\"card-title\">").concat(reponsive.photos[i].camera.full_name, "</h3>\n                                                        <p class=\"card-text\">").concat(reponsive.photos[i].earth_date, "</p>                                            \n                                                    </div>                                      \n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>");
    }
  };
} else {
  var spacexWorl = function spacexWorl(test) {
    for (var i = 0; i < 1; i++) {
      innerhtml.innerHTML += "<div class=\"container\">\n                                        <div class = \"row\">\n                                            <div class=\"col-lg-7 col-xl-7\">\n                                                <img  class = \"card-img-top col-lg-8 col-xl-8 imgClass\" src=\"".concat(test.links.mission_patch_small, "\">\n                                            </div>                                            \n                                            <div class=\"col-lg-5 col-xl-5 edithClass\">\n                                                <h2> Year: ").concat(test.launch_year, "</h2>\n                                                <h4> Date: ").concat(test.launch_date_local, "</h4>\n                                                <h5> Rocket: ").concat(test.rocket.rocket_name, "</h5> \n                                                <h5> Details: ").concat(test.details, "</h5> \n                                                <a href=\"").concat(test.links.article_link, "\">Artical</a>\n                                                <a href=\"").concat(test.links.video_link, "\">Youtube clip</a>\n                                            </div>\n                                        </div>\n                                    </div>");
    }
  };

  fetch(spaceXPastAndCurrectRockets + fligth_number).then(function (reponsive) {
    return reponsive.json();
  }).then(function (spaceXRrock) {
    console.log(spaceXRrock);
    spacexWorl(spaceXRrock);
  })["catch"](function (error) {
    return console.log(error);
  });
}