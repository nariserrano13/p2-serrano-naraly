//hamburger menu

function navmenu() {
    //initialize variable and set to nav-links html element
    var links = document.getElementById("nav-links");
    //if/else to toggle between display values. 
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

  
var fundraiseIcon = document.getElementsByClassName('involved-collapse-content')[0];
var screenSize = screen.width;

function involved_fundraise(){
  fundraiseIcon.classList.toggle('involved-collapse-content');
}

var leadIcon = document.getElementsByClassName('involved-collapse-lead')[0];

function involved_lead(){
  leadIcon.classList.toggle('involved-collapse-lead');
}

var partnerIcon = document.getElementsByClassName('involved-collapse-partner')[0];

function involved_partner(){
  partnerIcon.classList.toggle('involved-collapse-partner');
}

// is there a way to remove and add a div in dom using an if/else. 
// how to get JS to recognize screen px size 
// if (screensize == 600) {
//   console.log('hi');
// } else {
//       fundraiseIcon.classList.toggle('involved-collapse-content');
// }


//http://worldtimeapi.org/api/timezone/America/New_York.txt.

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      //takes JSON response and turning it into a script that we can use
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

          //this console.log(apiResult.datetime);
          //gave 2020-04-04T15:07:41.852317-04:00 in console
        console.log(apiResult.datetime);

        var month = apiResult.datetime.slice(5,7);
        console.log(month);

        var day = apiResult.datetime.slice(8,10);
        console.log(day);

        var year = apiResult.datetime.slice(0,4);
        console.log(year);
    }
};
xmlhttp.open('GET', 'http://worldtimeapi.org/api/timezone/America/New_York', true);
xmlhttp.send();

