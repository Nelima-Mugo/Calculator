let calculation = JSON.parse(localStorage.getItem("calculation")) || "";
display();
function button(num) {
  calculation += num;
  display();
}
function display() {
  document.querySelector(".js-display").innerHTML = calculation;
}
document.querySelector('.delete').addEventListener('click', ()=>{
  calculation = calculation.toString();
    calculation = calculation.substring(0, calculation.length - 1);
    display();
})
document.body.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    button("1");
  } else if (event.key === "2") {
    button("2");
  } else if (event.key === "3") {
    button("3");
  } else if (event.key === "4") {
    button("4");
  } else if (event.key === "5") {
    button("5");
  } else if (event.key === "6") {
    button("6");
  } else if (event.key === "7") {
    button("7");
  } else if (event.key === "8") {
    button("8");
  } else if (event.key === "9") {
    button("9");
  } else if (event.key === "+") {
    button("+");
  } else if (event.key === "-") {
    button("-");
  } else if (event.key === "*") {
    button("*");
  } else if (event.key === "/") {
    button("/");
  } else if (event.key === "0") {
    button("0");
  } else if (event.key === ".") {
    button(".");
  } else if (event.key === "=") {
    // eval(calculation);
    calculation = eval(calculation);
    localStorage.setItem("calculation", JSON.stringify(calculation));
    display();
  } else if (event.key === "Enter") {
    // eval(calculation);
    calculation = eval(calculation);
    localStorage.setItem("calculation", JSON.stringify(calculation));
    display();
  } else if (event.key === "Backspace" || event.key === "Delete") {
    calculation = calculation.toString();
    calculation = calculation.substring(0, calculation.length - 1);
    display();
  }
});
