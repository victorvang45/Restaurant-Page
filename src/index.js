import "./styles.css";

import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";
console.log("Hello World!");


const contentDiv = document.getElementById('content');

createMenu(contentDiv);



