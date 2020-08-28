
let text__1 = document.getElementById('text__1');
let text__2 = document.getElementById('text__2');
let btn = document.getElementById('btn');

var displayArray = [text__1, text__2, btn];
console.log(displayArray)

let array = [1,2]
function timer(time) { 
  return new Promise(resolve => setTimeout(resolve, time));
}




let windowInit = document.addEventListener("DOMContentLoaded", getQueryInit);

function getQueryInit() { 
    let matchQuery = window.matchMedia("(min-width: 1200px)");
    if(matchQuery.matches) 
    {
        async function displayFrontPage() 
        {
            for(let i = 0; i < displayArray.length;i++)
            {
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
}
