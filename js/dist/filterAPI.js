
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
        innerhtml.innerHTML+= ` <div class="container-fluid flow">
                                    <h1 class = "h1inner">SpaceX rockets</h1>                                
                                    <div id = "inx" class = "row"></div>
                                </div>`
        for(let i = 0; i < reponsive.length; i++) {
            document.getElementById('inx').innerHTML +=`
                                            <div class = "col-lg-3 col-xl-3 gridEdit">
                                                <div class = "card col-lg-12 col-xl-12">
                                                    <div class = "card__edith">
                                                        <div class = "img-square-wrapper">
                                                            <img class = "card-img-top overflowImg" src = "${reponsive[i].flickr_images[i]}">
                                                        </div>
                                                    </div>
                                                    <div class="card-body overflow">
                                                        <h3 class="card-title">${reponsive[i].rocket_name}</h3>
                                                        <p class="card-text">${reponsive[i].description}</p>                                            
                                                    </div>                                      
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
        }
    }
  
}
if(linkid === "value2") { 
    fetch(apollo).then(reponsive => reponsive.json()).then(apollo => {
        console.log(apollo);   
        apolloEleven(apollo);
          

    }).catch(error => console.log(error));
    
    var apolloEleven = function(reponsive) {
        innerhtml.innerHTML+= ` <div class="container-fluid flow">
                                    <h1 class = "h1inner">SpaceX rockets</h1>                                
                                    <div id = "inx" class = "row"></div>
                                </div>`
        for(let i = 0; i < 10; i++) {
            document.getElementById('inx').innerHTML +=`
                                            <div class = "col-lg-3 col-xl-3 gridEdit">
                                                <div class = "card col-lg-12 col-xl-12">
                                                    <div class = "card__edith">
                                                        <div class = "img-square-wrapper">
                                                            <img class = "card-img-top overflowImg" src = "${ reponsive.collection.items[i].links[0].href}">
                                                        </div>
                                                    </div>
                                                    <div class="card-body overflow">                                                        
                                                        <p class="card-text">${ reponsive.collection.items[i].data[0].description }</p>                                            
                                                    </div>                                      
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
        }
    }   
}

if(linkid === "value3") { 
    fetch(marsImage).then(reponsive => reponsive.json()).then(marsImageCurrent => {
        console.log(marsImageCurrent);   
        marsImg(marsImageCurrent);
          
    }).catch(error => console.log(error));

    var marsImg = function(reponsive) {
        innerhtml.innerHTML+= ` <div class="container-fluid flow">
                                    <h1 class = "h1inner">Images of Mars</h1>                                
                                    <div id = "inx" class = "row"></div>
                                </div>`
        for(let i = 0; i < 4; i++) {
            document.getElementById('inx').innerHTML +=`
                                            <div class = "col-lg-3 col-xl-3 gridEdit">
                                                <div class = "card col-lg-12 col-xl-12">
                                                    <div class = "card__edith">
                                                        <div class = "img-square-wrapper">
                                                            <img class = "card-img-top" src = "${reponsive.photos[i].img_src}">
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <h3 class="card-title">${reponsive.photos[i].camera.full_name}</h3>
                                                        <p class="card-text">${reponsive.photos[i].earth_date}</p>                                            
                                                    </div>                                      
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
        }
    }
}
else { 
    fetch(spaceXPastAndCurrectRockets + fligth_number).then(reponsive => reponsive.json()).then(spaceXRrock => { 
        console.log(spaceXRrock);
        spacexWorl(spaceXRrock)
    }).catch(error => console.log(error));

    function spacexWorl(test) { 
        for(var i = 0;i < 1; i++ ) {           
            innerhtml.innerHTML += `<div class="container">
                                        <div class = "row">
                                            <div class="col-lg-7 col-xl-7">
                                                <img  class = "card-img-top col-lg-8 col-xl-8 imgClass" src="${test.links.mission_patch_small}">
                                            </div>                                            
                                            <div class="col-lg-5 col-xl-5 edithClass">
                                                <h2> Year: ${test.launch_year}</h2>
                                                <h4> Date: ${test.launch_date_local}</h4>
                                                <h5> Rocket: ${test.rocket.rocket_name}</h5> 
                                                <h5> Details: ${test.details}</h5> 
                                                <a href="${test.links.article_link}">Artical</a>
                                                <a href="${test.links.video_link}">Youtube clip</a>
                                            </div>
                                        </div>
                                    </div>`;                                    
              
        }
    }
}

