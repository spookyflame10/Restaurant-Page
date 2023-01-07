import {repeatText,createEl} from "./auxFunctions.js";
import food from './img/food.jpg';

export default function createHome() {
  const menuContainer = createEl('div', 'menuContainer');
  Container.appendChild(menuContainer);
// Add the image to our existing div.

  const menuItem = createEl('div', 'menuItem');
  
  const menuTitle = createEl('div', 'menuTitle', 'Bobs');
  menuItem.appendChild(menuTitle);

  const menuImage = new Image();
  menuImage.src = food;
  menuItem.appendChild(menuImage);

  const menu = repeatText(12, menuItem);
  console.log(menu);
  menu.forEach(menuItem => console.log(menuItem));
  menu.forEach(menuItem => menuContainer.appendChild(menuItem.cloneNode(true)));
}
