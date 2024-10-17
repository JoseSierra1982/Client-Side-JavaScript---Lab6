//Create a web page with a form that has two input fields: one for a username and one for a password.  
//Validate the form before submission to ensure that the username is at least 5 characters long and the password is at least 8 characters long.

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');


loginForm.addEventListener('submit', (event) => {
 
  let isValid = true;

  usernameError.textContent = '';
  passwordError.textContent = '';
  // Validate username length (at least 5 characters)
  if (usernameInput.value.length < 5)
  {
    usernameError.textContent = 'Username must be at least 5 characters long.';
    isValid = false;
  }
  // Validate password length (at least 8 characters)
  if (passwordInput.value.length < 8)
  {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    isValid = false;
  }
  // If valid, log credentials and display success alert
  if (isValid) {
    console.log('Username:', usernameInput.value);
    console.log('Password:', passwordInput.value);
    alert('Login successful!');
  }
});

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';
});
