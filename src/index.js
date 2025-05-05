import "./styles.css";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";


function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");


    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}



//initialize

const contentDiv = document.getElementById('content');

const homeButton = document.getElementById('home-btn');
homeButton.classList.add("button-nav");
homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    contentDiv.replaceChildren();
    setActiveButton(homeButton);
    createHome(contentDiv);
  });

const menuButton = document.getElementById('menu-btn');
menuButton.classList.add("button-nav");
menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    contentDiv.replaceChildren();
    setActiveButton(menuButton);
    createMenu(contentDiv);
  });

const aboutButton = document.getElementById('about-btn');
aboutButton.classList.add("button-nav");
aboutButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    contentDiv.replaceChildren();
    setActiveButton(aboutButton);
    createAbout(contentDiv);
  });

setActiveButton(document.querySelector(".button-nav"));
createHome(contentDiv);




