"use strict";

const itemTexts = [];

function getInput() {
  return document.getElementById("input-box").value;
}

function createELement(text) {
  const item = document.createElement("h2");
  item.innerText = text;
  return item;
}

function doesExist(text) {
  return itemTexts.includes(text);
}

function addItem() {
  const inputText = getInput();

  if (inputText === "") {
    alert("Empty string!!!");
    return;
  }

  if (doesExist(inputText)) {
    alert("Duplicate!!!!");
    return;
  }

  itemTexts.push(inputText);
  const item = createELement(inputText);
  const targetElement = document.getElementById("list");
  targetElement.appendChild(item);
}
