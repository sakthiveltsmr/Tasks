const $languages = document.getElementById("en");
const $todolist = document.getElementById("to");

$languages.addEventListener("keypress", (a) => {
  if (a.code === "Enter" && a.target.value !== "") {
    let first = a.target.value;
    let $lastItem = document.createElement("li");
    let finalId = new Date().getTime();
    $lastItem.innerHTML = `  <input id="${finalId}" type="checkbox" />
    <label for="${finalId}">${first}</label> 
   `;
    $todolist.appendChild($lastItem);
    $languages.value = "";
  }
});
$todolist.addEventListener("click", (a) => {
  if (a.target.checked) {
    a.target.parentElement.style.textDecoration = "line-through";
    a.target.parentElement.style.color = "green";
  } else {
    a.target.parentElement.style.textDecoration = "none";
    a.target.parentElement.style.color = "black";
  }
});
