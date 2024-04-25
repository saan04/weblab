const form = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const yearOfBirthInput = document.getElementById('yearOfBirth');
const emailInput = document.getElementById('email');
const termsInput = document.getElementById('terms');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
    return;
  }

  if (!passwordInput.value || !confirmPasswordInput.value || !userNameInput.value || !emailInput.value || !yearOfBirthInput.value || !termsInput.checked) {
    alert('All fields are required');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Invalid email format');
    return;
  }

  if (!validateYearOfBirth(yearOfBirthInput.value)) {
    alert('Invalid year of birth format');
    return;
  }

  alert('Registration successful');
  form.reset();
});

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  const validateYearOfBirth = (yearOfBirth) => {
    const year = parseInt(yearOfBirth);
    return year >= 1900 && year <= 2000 && yearOfBirth.length === 4;
  }
  