//Task: Create a simple web page with a button and a counter. When the button is clicked, the counter should increment by 1.
let count = 0;
const button = document.getElementById('counterButton');
const display = document.getElementById('counterValue');
button.addEventListener('click', () => {
  count++;
  display.textContent = count;
});
