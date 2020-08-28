

let headerText = document.getElementById('inner__text');
let innerIcon = document.getElementById('innerIcon');
let displayArray = [headerText, innerIcon];

function timer(time) { 
    return new Promise(resolve => setTimeout(resolve, time));
}

let windowInit = document.addEventListener("DOMContentLoaded", getQueryInit);


function getQueryInit() {

    let matchQuery = window.matchMedia("(min-width: 1200px)");
    let biggerQuery = window.matchMedia("(min-width: 1600px)");

    if(matchQuery.matches) { 
        async function displayFrontPage() {
            for(let i = 0; i < displayArray.length; i++) {
                await timer(300);
                if(displayArray[i].style.display === "block") {
                  displayArray[i].style.display = "none";
                } else {
                  displayArray[i].style.display = "block";
                }
            }
        }
        displayFrontPage();
    }
    if(biggerQuery.matches) {
        async function displayFrontPage() {
            for(let i = 0; i < displayArray.length; i++) {
                await timer(200);
                if(displayArray[i].style.display === "block") {
                  displayArray[i].style.display = "none";
                } else {
                  displayArray[i].style.display = "block";
                }
            }
        }

    }
    
}


