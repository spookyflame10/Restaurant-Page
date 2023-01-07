import './styles/home.css';
import './styles/style.css';
import './styles/menu.css';
import {clear} from "./auxFunctions.js";
import home from './home.js';
import initial from './initial.js';
import menu from './menu.js';
initial();
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");
homeButton.addEventListener('click', function(){
    clear();
    home();
});

menuButton.addEventListener('click', function(){
    clear();
    menu();
});

contactButton.addEventListener('click', function(){
    // render();
    // about();
    // pageLoad();
});


menu();
console.log('hi boddbdd');