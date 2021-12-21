import throttle from "lodash/throttle";

const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

ref.form.addEventListener('input', throttle(onFormInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    console.log[formData];
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

populateData();
    
function populateData() {
    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData);
    if (parsedData) {
        ref.input.value = parsedData.email;
        ref.textarea.value = parsedData.message;
    }
};

function onFormSubmit(e) {
    console.log(formData);
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};


