const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxConteiner = document.getElementById("boxes");

createBtn.addEventListener("click", handleCreate);
function handleCreate() {

  //  добавити цю умову та очистити інпут
  if (inputEl.value < 0 || inputEl.value > 100) {
    alert("Please enter a number between 1 and 100")
    return;
  }
  
  boxConteiner.innerHTML = '';

    for (let i = 0; i < inputEl.value; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxConteiner.appendChild(box);
    }
  inputEl.value = '';
}

destroyBtn.addEventListener("click", handleDestroyed);
function handleDestroyed() {
  boxConteiner.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
