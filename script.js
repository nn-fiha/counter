function getInput() {
  return document.getElementById("input-box").value;
}

function createELement(text) {
  const item = document.createElement("h2");
  item.innerText = text;
  return item;
}

function addItem() {
  const inputText = getInput();
  const item = createELement(inputText);
  const targetElement = document.getElementById("list");
  targetElement.appendChild(item);
}
