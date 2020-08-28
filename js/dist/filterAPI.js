
var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var spaceXRockets = "https://api.spacexdata.com/v3/rockets";
var humanLanuchRocket = "https://api.spacexdata.com/v4/launches/latest";
var spaceXPastAndCurrectRockets = "https://api.spacexdata.com/v3/launches/";
var apollo = "https://images-api.nasa.gov/search?q=apollo%2011...";
var marsImage = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9';

 

function getQueryStringValue (key) {
  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

let linkid = getQueryStringValue("id");
let fligth_number = getQueryStringValue('flight_number');
let innerhtml = document.getElementById('innerhtml');



if(linkid === "value1") {
    fetch(spaceXRockets).then(reponsive => reponsive.json()).then(spaceXRocet => {
        displaySpaceXRocket(spaceXRocet);
        console.log(spaceXRocet);
        
    }).catch(error => console.log(error));

    var displaySpaceXRocket = function(reponsive) { 
        for(let i = 0; i < reponsive.length; i++){
            innerhtml.innerHTML += `<div class = "inner"><img src=${reponsive[i].flickr_images[i]}</div>`;
        }
    }
  
}
if(linkid === "value2") { 
    fetch(apollo).then(reponsive => reponsive.json()).then(apollo => {
        console.log(apollo);   
        apolloEleven(apollo);
          

    }).catch(error => console.log(error));
    
    var apolloEleven = function(reponsive) {
        for(let i = 0;i < 10; i++) {
            innerhtml.innerHTML+= `<div class = "apolloDiv"><p>${reponsive.collection.items[i].data[0].description}</p></div>`;         

        }
    }   
}

if(linkid === "value3") { 
    fetch(marsImage).then(reponsive => reponsive.json()).then(marsImageCurrent => {
        console.log(marsImageCurrent);   
        marsImg(marsImageCurrent);
          
    }).catch(error => console.log(error));

    var marsImg = function(reponsive) {
        for(let i = 0; i < 4; i++) {
            innerhtml.innerHTML+= `<div class = 'myFunc'><div class = 'mainDisplay'><article><header><h2> Name: ${reponsive.photos[i].camera.full_name}</h2><h3> Date: ${reponsive.photos[i].earth_date}</h3></header></div><img src="${reponsive.photos[i].img_src}"width='80%'></div>`;
        }
    }
}
else { 
    fetch(spaceXPastAndCurrectRockets + fligth_number).then(reponsive => reponsive.json()).then(spaceXRrock => { 
        console.log(spaceXRrock);
        spacexWorl(spaceXRrock)
    }).catch(error => console.log(error))

    function spacexWorl(test) { 
        for(var i = 0;i < 1; i++ ) {
            innerhtml.innerHTM += "<h1>Rocket Lanch</h1>";       
           if(test.links.mission_patch_small === null) {               
               innerhtml.innerHTML += "<img src='js/dummyast.jpg'></img>";          
            
           }else if(test.links.mission_patch_small !== null) {
               innerhtml.innerHTML += "<img src='" +test.links.mission_patch_small + "'>";
           }       
           if (test.launch_year === null) {   
                    innerhtml.innerHTML += "<h1>Year: Not provided yet  </h1>";
         
           }else if (test.launch_year !== null) { 
               innerhtml.innerHTML += "<h1> Year: " + test.launch_year + "</h1>";
   
           }
           if(test.launch_date_local === null) { 
               innerhtml.innerHTML += "<h1> Time: Not provided yet </h1>";
               
           }else if (test.launch_date_local !== null) {
               innerhtml.innerHTML += "<h1> Date: " + test.launch_date_local + "</h1>";
   
           }
           if(test.rocket.rocket_name === null) { 
               innerhtml.innerHTML += "<h1> Rocket: Not provided yet </h1>"; 
               
           }
           if(test.details === null) { 
               innerhtml.innerHTML += "<p> Details: Not provided yet</p>"; 
               
           }else if (test.details !== null) { 
               innerhtml.innerHTML += "<p> Details: " + test.details + "</p>"; 
           
           }
           if(test.links.article_link === null) {
               innerhtml.innerHTML += "<a>Artical: There are no article yet </a>";
               
           }else if (test.links.article_link !== null) { 
               innerhtml.innerHTML += "<a href='"+ test.links.article_link +"'> Artical</a>";
           }
           if(test.links.video_link === null) { 
               innerhtml.innerHTML += "<a>Youtube clip: There are no YouTube clip yet </a>";
   
           }else if (test.links.video_link !== null) {
               innerhtml.innerHTML += "<a href='"+ test.links.video_link +"'> Youtube clip </a>";
           } else {         
            innerhtml.innerHTML += "<h1>Rocket Lanch</h1>";
           innerhtml.innerHTML += "<img src='" +test.links.mission_patch_small + "'>";
           innerhtml.innerHTML += "<h1> Year: " + test.launch_year + "</h1>";
           innerhtml.innerHTML += "<h1> Date: " + test.launch_date_local + "</h1>";
           innerhtml.innerHTML += "<h1> Rocket: " + test.rocket.rocket_name + "</h1>"; 
           innerhtml.innerHTML += "<p> Details: " + test.details + "</p>"; 
           innerhtml.innerHTML += "<a href='"+ test.links.article_link +"'> Artical</a>";
           innerhtml.innerHTML += "<a href='"+ test.links.video_link +"'> Youtube clip </a>";
           }
         }
      }
   
   
   
   
   

}

