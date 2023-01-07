function repeatText(num, text) {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(text);
  }
  return array;
}
function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}
function createEl(element, attribute, text) {
  const el = document.createElement(element);
  el.setAttribute("id", attribute);
  if (text) {
    el.innerHTML = `${text}`;
    //.appendChild(document.createTextNode(text));
  }
  return el;
}
const clear = () => {
    const container = document.querySelector('#Container');
    container.innerHTML = '';
}
export {repeatText, createParagraph, createEl, clear};