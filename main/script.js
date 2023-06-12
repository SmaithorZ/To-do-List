let input = document.querySelector("#iprompt");
let addBtn = document.querySelector("#add-btn");
let ul = document.querySelector("ul");
let li;

//ADD BTN
addBtn.addEventListener("click", function () {
  li = document.createElement("li");
  ul.append(li);
  li.innerText = input.value;
});
