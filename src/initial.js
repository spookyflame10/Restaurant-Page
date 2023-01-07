import {createEl} from "./auxFunctions.js";
import Icon from './img/food.jpg';

const initial = function(){
    const body = document.body;
    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    body.appendChild(content);
    // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // content.appendChild(myIcon);
    //header
    const header = createEl('div', 'header');
    content.appendChild(header);
    const buttonContainer = createEl('div', 'buttonContainer');
    header.appendChild(buttonContainer);
    const home = createEl('button', 'home', 'Home');
    buttonContainer.appendChild(home);
    const menu = createEl('button', 'menu', 'Menu');
    buttonContainer.appendChild(menu);
    const contact = createEl('button', 'contact', 'Contact');
    buttonContainer.appendChild(contact);
    //main content
    const contentContainer = createEl('div', 'contentContainer');
    content.appendChild(contentContainer);
    //changing container by each tab switch
    const Container = createEl('div', 'Container');
    contentContainer.appendChild(Container);
    //footer
    const footer = createEl('div', 'footer', 'Copyright © The Odin Project 2022');
    content.appendChild(footer);
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/spookyflame10";
    footer.appendChild(githubLink);
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
    githubLink.appendChild(githubIcon);
}
export default initial;