//Create a web page that displays the key code and  key value of the last key pressed on the keyboard.

const keyValueDisplay = document.getElementById('keyValue');
const keyCodeDisplay = document.getElementById('keyCode');

document.addEventListener('keydown', (pressed) => {
  keyValueDisplay.textContent = pressed.key;
  keyCodeDisplay.textContent = pressed.keyCode || pressed.which;
});
