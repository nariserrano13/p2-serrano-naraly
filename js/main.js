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