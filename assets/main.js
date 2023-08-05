const display = document.getElementById("calculator-display");
const buttons = document.querySelectorAll(".calc-button");

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const buttonValue = event.target.textContent;
  const currentDisplayValue = display.value;

  if (buttonValue === "del") {
    display.value = currentDisplayValue.slice(0, -1);
  } else if (buttonValue === "Reset") {
    display.value = "";
  } else if (buttonValue === "=") {
    try {
      display.value = eval(currentDisplayValue);
    } catch (error) {
      display.value = "Error";
    }
  } else {
    display.value = currentDisplayValue + buttonValue;
  }
}