// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const erase = document.querySelector("#erase");
const user = document.querySelector("#user");
const equals = document.querySelector(".equals_to");
const num = document.getElementsByClassName("num");
const ops = document.getElementsByClassName("ops");

let calculation = [];
let previousNum = "";
let currentNum = "";
let operator = null;

const updateNum = (e) => {
  if (operator === "" && previousNum !== "") {
    previousNum = "";
  }
  const numText = e.target.innerText;
  if (currentNum === "" && numText === ".") {
    currentNum = "0";
    user.innerHTML = currentNum;
  } else if (numText === "." && currentNum.includes(".")) {
    numText = null;
  } else {
    currentNum += numText;
    user.innerHTML = currentNum;
  }
};

const selectOperator = (e) => {
  if (previousNum !== "") {
    calculation.push(previousNum);
    if (calculation[calculation.length - 1] !== ("+" || "-" || "*" || "/")) {
      operator = e.target.innerText;
      calculation.push(operator);
    }
    previousNum = "";
  }
  if (currentNum !== "") {
    calculation.push(currentNum);
    if (calculation[calculation.length - 1] !== ("+" || "-" || "*" || "/")) {
      operator = e.target.innerText;
      calculation.push(operator);
    }
  }
  currentNum = "";
};

const getResult = (e) => {
  if (currentNum !== "") {
    calculation.push(currentNum);
  }

  const result = eval(calculation.join("")).toString();

  user.innerHTML = result;
  previousNum = result;
  currentNum = "";
  calculation = [];
  operator = null;
};

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", updateNum);
}
for (let i = 0; i < ops.length; i++) {
  ops[i].addEventListener("click", selectOperator);
}

equals.addEventListener("click", getResult);

erase.onclick = () => {
  user.innerHTML = "0";
  currentNum = "";

  calculation = [];
};
