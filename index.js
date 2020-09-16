const name = document.getElementById("name");
const year = document.getElementById("year");
const date = document.getElementById("date");
const wage = document.getElementById("wage");
const btnAdd = document.getElementById("btnAdd");
const board = document.querySelector("#board");
const mainBoard = document.querySelector("#mainBoard");
const summ = document.getElementById("summ");
const count = document.getElementById("count");
const quantity = document.getElementById("quantity");
// const selectedCheckBoxes = document.querySelectorAll("input.checkbox:checked");
const btnDelete = document.getElementById("btnDelete");
const btnSumm = document.getElementById("btnSumm");

let arr = [];

btnAdd.addEventListener("click", () => {
  arr.push({
    name: name.value,
    year: year.value,
    date: date.value,
    wage: wage.value,
  });
  addInfo();
});

function addInfo() {
  mainBoard.innerHTML = "";
  for (let i = 0; i < arr.length; i++)
    mainBoard.innerHTML += `<div id = "lineNr${i}"><tr><td><input type="checkbox" employeeID="${arr[i].id}"></td><td>${arr[i].name}</td><td>${arr[i].year}</td><td>${arr[i].date}</td><td>${arr[i].wage}</td></div;`;

  const count = arr.length;
  quantity.innerHTML = `Количество сотрудников: ${count}`;
}

btnDelete.addEventListener("click", () => {
  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
  let minus = [];
  checkedBoxes.forEach((box) => {
    minus.push(Number(box.getAttribute("employeeID")));
  });
  arr = arr.filter((employee) => !minus.includes(employee.id));
  addInfo();
});
