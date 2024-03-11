
const colorBody = document.querySelector("body");
const textSpan = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", handelChangeCOlor);

function handelChangeCOlor(evt) {
  const color = getRandomHexColor();
  
  colorBody.style.background = color;
  textSpan.textContent = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}