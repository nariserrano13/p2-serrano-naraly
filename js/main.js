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