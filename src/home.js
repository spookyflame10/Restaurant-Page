import {repeatText,createEl} from "./auxFunctions.js";

export default function createHome() {
  const titleContainer = createEl('div', 'titleContainer');
  Container.appendChild(titleContainer);
 
  const title = createEl('div', 'title', 'The Restaurant');
  titleContainer.appendChild(title);

  const reviewContainer = createEl('div', 'reviewContainer');
  Container.appendChild(reviewContainer);

  const reviews = repeatText(6, "This food is so good. I love it bro!!<br><span>- Bob</span>");
  reviews.map(text =>createEl('div', 'review', text))
    .forEach(review => reviewContainer.appendChild(review));

  const ad = createEl('div', 'ad');
  Container.appendChild(ad);

  const adText = createEl('h2', 'addText', 'We Only serve the Best!! <br> Best food in the World');
  ad.appendChild(adText);

  const logo = createEl('div', 'logo');
  ad.appendChild(logo);

  const hourContainer = createEl('div', 'hourContainer');
  Container.appendChild(hourContainer);

  const hours = repeatText(6, "Monday   12am-12pm");
  hours.map(text =>createEl('div', 'hour', text))
    .forEach(hour => hourContainer.appendChild(hour));
}
