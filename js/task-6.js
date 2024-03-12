const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxConteiner = document.getElementById("boxes");

createBtn.addEventListener("click", handleCreate);
function handleCreate() {

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




// ДОПОМАГАВ ДІВЧИННІ ЦЕ ЇЇ КОД ЯКИЙ ПРАЦЮЄ

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const fieldInput = document.querySelector(`input`);
// const addBtr = document.querySelector(`[data-create]`);
// const clinerBtr = document.querySelector(`[data-destroy]`);
// const bigBox = document.querySelector(`#boxes`);
//  let width = 30;
// let height = 30;
// addBtr.addEventListener("click", createBoxes);
// function createBoxes() {
//   const amount = fieldInput.value;
//   if (amount <= 0 || amount > 100) {
//     bigBox.innerHTML = "";
//      width = 30;
//      height = 30;
//     return;
//   }
//   else {
//     for (let i = 0; i < amount; i++)
//     {
//        const cub = document.createElement("div");
//         cub.style.width = `${width}px`;
//         cub.style.height = `${height}px`;
//         cub.style.backgroundColor = getRandomHexColor();
//         bigBox.append(cub);
//         width += 10;
//         height += 10;
//       fieldInput.value = "";
//     }
//   }
// };
//  clinerBtr.addEventListener("click",destroyBoxes);
//     function destroyBoxes() {
//       bigBox.innerHTML = "";
//      width = 30;
//      height = 30;
// };


