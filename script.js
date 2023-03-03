// your code here
const form = document.querySelector(`form`);
const nameEle = document.querySelector(`#name`);
const yearEle = document.querySelector(`#year`);
const btn = document.querySelector(`#button`);
const h3 = document.querySelector(`h3`);

form.addEventListener(`click`, function (e) {
  e.preventDefault();

  const name = nameEle.value;
  const year = yearEle.value;

  if (name && !year) {
    h3.textContent = `https://localhost:8080/?name=${name}`;
  } else if (year && !name) {
    h3.textContent = `https://localhost:8080/?year=${year}`;
  } else if (name && year) {
    h3.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
  } else if (!name && !year) {
    h3.textContent = h3.innerText;
  }
});
