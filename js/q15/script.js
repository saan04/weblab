const form = document.getElementById('userInfoForm');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const age = form.elements['age'].value;
  const hometown = form.elements['hometown'].value;

  const yearOfBirth = new Date().getFullYear() - age;

  output.innerHTML = `
    <p>Name: ${name}</p>
    <p>Year of birth: ${yearOfBirth}</p>
    <p>Hometown: <a href="https://www.google.com/search?q=${hometown}" target="_blank">Google search results</a></p>
  `;
});