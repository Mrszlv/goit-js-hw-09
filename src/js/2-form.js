const formData = {
    email: "",
    message: "",
}

const storageKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.form-input');
const messageInput = document.querySelector('.form-textarea');

function saveToLocalStorage() {
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const storageData = localStorage.getItem(storageKey);
    if (storageData) {
        const parseData = JSON.parse(storageData);
        formData.email = parseData.email || "";
        formData.message = parseData.message || "";
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
}

function handleSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(storageKey);
        formData.email = "";
        formData.message = "";
        emailInput.value = "";
        messageInput.value = "";
    }
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);