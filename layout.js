var darkbtn = document.querySelector(".themebtn");
var bodyTheme = document.querySelector(".bodyTheme");
var mainTheme = document.querySelector("main");
var footerTheme = document.querySelector("footer");
var navTheme = document.querySelector(".navbar");
var cardTheme = document.querySelectorAll(".card");

var previousTheme = "dark";
var currentTheme = "dark";

function darkMode() {
    bodyTheme.style.backgroundColor = "#07161b";
    mainTheme.style.backgroundColor = "#07161b";
    bodyTheme.style.color = "#f7e4e4d9";
    footerTheme.style.backgroundColor = "#101e23";
    navTheme.style.backgroundColor = "#3d737f";
    applyCardColor("#101e23");
}

function lightMode() {
    bodyTheme.style.backgroundColor = "#f7e4e4d9";
    mainTheme.style.backgroundColor = "#f7e4e4d9";
    bodyTheme.style.color = "#071600";
    footerTheme.style.backgroundColor = "#101e23";
    navTheme.style.backgroundColor = "#101e23";
    applyCardColor("#101e232c");

}
function applyCardColor(color) {
    for (var i = 0; i <cardTheme.length; i++) {
         cardTheme[i].style.backgroundColor= color;
    }





}

function choosingTheme() {
    if (currentTheme === "dark") {
        // Save current theme as previous theme before changing
        previousTheme = currentTheme;
        currentTheme = "light";
        lightMode();
        darkbtn.textContent = "Dark";
    } else {
        // Save current theme as previous theme before changing
        previousTheme = currentTheme;
        currentTheme = "dark";
        darkMode();
        darkbtn.textContent = "Light";
        
    }
}

darkbtn.addEventListener("click",choosingTheme);