// Navigation
function openNav() {
    document.getElementById("myNav").style.width = "25%";
    document.getElementById("show").style.display = "none";                        
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%"; 
    document.getElementById("show").style.display = "block";                                   
}
// Navigation


// Screen
var full = document.documentElement;
openFull = document.getElementById("openFull");
closeFull = document.getElementById("closeFull");

function openFullscreen() {
    if (full.webkitRequestFullscreen) {
        full.webkitRequestFullscreen();
    }
    openFull.style.display = "none";
    closeFull.style.display = "block"
}
function closeFullscreen() {
    if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    closeFull.style.display = "none";
    openFull.style.display = "block";
}
// Screen


// Skills
boxText = document.getElementsByClassName("boxText");
function functionSkills(skill) {
    for (i = 0; i < boxText.length; i++) {
        boxText[i].style.display = "none"
    }
    document.getElementById(skill).style.display = "block";
    document.getElementById("disappearH2").style.display = "none";
}
// Skills
