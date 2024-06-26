var darkbtn = document.querySelector(".themebtn");
var bodyTheme = document.querySelector(".bodyTheme");
var mainTheme = document.querySelector("main");
var footerTheme = document.querySelector("footer");
var navTheme = document.querySelector(".navbar");

var previousTheme = "dark";
var currentTheme = "dark";

function darkMode() {
    bodyTheme.style.backgroundColor = "#07161b";
    mainTheme.style.backgroundColor = "#07161b";
    bodyTheme.style.color = "#f7e4e4d9";
    footerTheme.style.backgroundColor = "#101e23";
    navTheme.style.backgroundColor = "#3d737f";
}

function lightMode() {
    bodyTheme.style.backgroundColor = "#f7e4e4d9";
    mainTheme.style.backgroundColor = "#f7e4e4d9";
    bodyTheme.style.color = "#071600";
    footerTheme.style.backgroundColor = "#101e23";
    navTheme.style.backgroundColor = "#101e23";
}

function choosingTheme() {
    if (currentTheme === "dark") {
        // Save current theme as previous theme before changing
        previousTheme = currentTheme;
        currentTheme = "light";
        lightMode();
        darkbtn.textContent = "Dark";
        console.log(currentTheme);
    } else {
        // Save current theme as previous theme before changing
        previousTheme = currentTheme;
        currentTheme = "dark";
        darkMode();
        darkbtn.textContent = "Light";
        console.log(currentTheme);
    }
}

darkbtn.addEventListener("click",choosingTheme);