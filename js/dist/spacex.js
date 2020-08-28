 
 
// links
var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var spaceXRockets = "https://api.spacexdata.com/v3/rockets";
var humanLanuchRocket = "https://api.spacexdata.com/v4/launches/latest";
var spaceXPastAndCurrectRockets = "https://api.spacexdata.com/v3/launches";
var marsImage = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9';

 
//Fetch nasa`s today image
fetch(todayImage).then(respone => respone.json()).then(todayImageResponse => {
    imageOfToday(todayImageResponse);  
}).catch(error => console.log(error));
 
//Fetch SpaceX latest rocket lanuch
fetch(humanLanuchRocket).then(respone => respone.json()).then(callBackRocket => {
    spaceXFunc(callBackRocket);
}).catch(error => console.log(error));
 
 
//Fetch Spacex diffrect rockets
fetch(spaceXRockets).then(response => response.json()).then(spaceXRockets => {
    console.log(spaceXRockets);
    spaceXDiffRocketsFunc(spaceXRockets);
    
}).catch(error => console.log(error));
 
//Fetch SpaceX past and currect rocket lanuch
fetch(spaceXPastAndCurrectRockets).then(respone => respone.json()).then(spaxeXPastAndCurrect => { 
    console.log(spaxeXPastAndCurrect);
    pastAndCurrectFunc(spaxeXPastAndCurrect)
}).catch(Error => console.log(Error));
 
 
 
// Nasa Functions
var imageOfToday = function(response) {    
    document.getElementById('innerId').innerHTML += `<div class = "scrollDiv"><h3 class = "col-12"> ${response.title}</h3> <p class = "col-12"> ${response.explanation}</p></div>`;
    document.getElementById('imageCol').innerHTML += `<img class = "col-12" src = ${response.url}>`;
}
 
//  SpaceX latest rocket lanuch
var spaceXFunc = function(response) {    
    document.getElementById("innerImage").innerHTML += `<img class = "col-12" src = ${response.links.flickr.original[2]}>`;  
    document.getElementById("innerIdTwo").innerHTML += `<p class = "col-12"> ${response.details}</p>`;  
}
 
 
// SpaceX diffrect rockets 
var spaceXDiffRocketsFunc = function(respone) {    
    document.getElementById('gridIdOne').innerHTML += `<div class = "card edigth"><img class = "card-img-top downToImage" src = "${respone[0].flickr_images[0]}"><div class="card-body"><h3 >${respone[0].rocket_name}</h3><a class="btn btn-primary" href = "../../page/displayFetch.html?id=value1"> See more </a></div></div>`;
    document.getElementById('gridIdTwo').innerHTML += `<div class = "card edigth"><img class = "card-img-top downToImage" src = "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"><div class="card-body"><h3>50 years since Apollo Landing</h3><a class="btn btn-primary" href = "../../page/displayFetch.html?id=value2"> See more </a></div></div>`;
    document.getElementById('gridIdThree').innerHTML += `<div class = "card edigth"><img  class = "card-img-top downToImage" src = "https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940div class="card-body"><h3>People in Space</h3><a class="btn btn-primary" href = "../../page/displayFetch.html?id=value3"> See more </a></div>`;
}
 
// Past and Currect lanuch of SpaceX Function
var pastAndCurrectFunc = function(respone) { 
    for(let i = 0; i < respone.length; i++) { 
        document.getElementById('spaceIdGrid').innerHTML += `<div class = "card edigth spxGrid col-10 col-lg-2 col-xl-2">
                                                                <img class = "card-img-top downToImage" src="${respone[i].links.mission_patch_small}">
                                                                <div class="card-body bodyCover">                                                                 
                                                                    <h3 class = "col-10 col-lg-12 col-xl-12 cardhear">${respone[i].rocket.rocket_name}</h3>
                                                                    <a class="col-12 col-lg-9 col-xl-12 btn btn-primary newBtn" href = "../../page/displayFetch.html?flight_number=${respone[i].flight_number}"> See more </a>                                                                                                                                                                                                              
                                                                </div>
                                                            </div>`;
    }
}
 
