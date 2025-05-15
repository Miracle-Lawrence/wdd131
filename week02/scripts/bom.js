const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌";
list.appendChild(li);



