const display = document.getElementById("display");

function numberInput(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key === "." ||
    key === "00" ||
    key === "*" ||
    key === "/" ||
    key === "-" ||
    key === "+"
  ) {
    numberInput(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Backspace") {
    clearDisplay();
  }
});
