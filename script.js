const collapseButton = document.querySelector("#collapse");
collapseButton.addEventListener("click", collapseSidebar);

const main = document.querySelector("#main");
const sidebar = document.querySelector("#sidebar");
const themeButton = document.querySelector("#theme-btn");
const themeDiv = document.querySelector("#theme-div");
const circle = document.querySelector("#circle");
const aboutInfo = document.querySelector("#about-info");
const formInfo = document.querySelector("#form-info");
const attInfo = document.querySelector("#attribution-info");
const aboutInfoIcon = document.querySelector("#about-info-icon");
const formInfoIcon = document.querySelector("#form-info-icon");
const attInfoIcon = document.querySelector("#attribution-info-icon");

let sidebarState = true; //true -> larger bar, false -> smaller bar
function collapseSidebar() {
    if(sidebarState) {
        sidebar.style.width = "70px";
        collapseButton.style.marginBottom = "5px";
        themeDiv.style.width = "30px";
        main.style.marginLeft = "70px";
        
    } else {
        sidebar.style.width = "200px";
        // collapseButton.style.marginBottom = "60px";
        themeDiv.style.width = "50px";
        main.style.marginLeft = "220px";
    }
    aboutInfo.classList.toggle("hide");
    formInfo.classList.toggle("hide");
    attInfo.classList.toggle("hide");
    aboutInfoIcon.classList.toggle("hide");
    formInfoIcon.classList.toggle("hide");
    attInfoIcon.classList.toggle("hide");
    circle.classList.toggle("circle-small");
    circle.style.animation = "circleBackward 0.5s backwards";
    sidebarState = !sidebarState;
}

themeDiv.addEventListener("click", toggleTheme);

let toggleState = true; //true-> light mode, false -> dark mode
function toggleTheme() {
    //to toggle theme itself
    document.body.classList.toggle("light");
    //ie larger sidebar is open
    if (sidebarState) {
        if (toggleState) {
            circle.style.animation = "circleForward 0.5s forwards";
            circle.style.backgroundColor = "#e9dea8";
        }
        else {
            circle.style.animation = "circleBackward 0.5s backwards";
            circle.style.backgroundColor = "#021f25";
        }
    }
    //sidebar is collapsed
    else {
         if (toggleState) {
            circle.style.backgroundColor = "#e9dea8";
        }
        else {
            circle.style.backgroundColor = "#021f25";
        }
    }
    toggleState = !toggleState;
}
