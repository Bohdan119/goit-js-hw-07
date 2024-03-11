const newInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

newInput.addEventListener("input", handlerInput);

function handlerInput(evt) {
    userName.textContent = newInput.value.trim();
    if (newInput.value.trim() === '') {
        userName.textContent = "Anonymous";
    };
    // console.dir(userName);
    // console.dir(newInput)
};