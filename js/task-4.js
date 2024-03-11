const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);

function handlerForm(evt) {
    evt.preventDefault();
    
    
    const formData = new FormData(evt.currentTarget);
    console.log(formData);
    
    formData.forEach((value, name) => {
        console.log("handlerForm -> name :", name);
        console.log("handlerForm -> value :", value);
    });

    // console.log(evt.currentTarget.elements.email);

    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;    
    if (email == ''){
        alert('PLEASE WRITE EMAIL');
    }
    if
        (password == ''){
        alert('PLEASE WRITE PASSWORD');
    }

    evt.target.reset();
};
