const display = document.querySelector('#display');

function pressButton(event) {
  display.value += event.target.textContent;
}

function egal() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function nettoyer() {
  display.value = "";
}