"use strict";

function getInput() {
  return document.getElementById("input-box").value;
}

function createELement(text) {
  const item = document.createElement("h2");
  item.innerText = text;
  return item;
}

function doesExist(text) {
  const items = [...document.getElementsByTagName("h2")];
  const item = items.find(function (item) {
    return item.innerText === text;
  });
  return Boolean(item); // if item !== undefined or null then it will be true
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

  const item = createELement(inputText);
  const targetElement = document.getElementById("list");
  targetElement.appendChild(item);
}
