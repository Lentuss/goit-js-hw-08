import throttle from "lodash.throttle"

const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const textarea = document.querySelector("textarea");

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

if (formData.email) { email.value = formData.email };
if (formData.message) { textarea.value = formData.message };

const setData = (e) => {

    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
const onSubmitForm = (e) => {

    e.preventDefault() 

    if (!formData.email || !formData.message) {   
        
        alert("Заповніть, будь ласка, всі поля форми")       
    }

    else {

    console.log(formData)

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    formData.email = '';
    formData.message = '';
    }
}

form.addEventListener('input', throttle((setData), 500));

form.addEventListener('submit', onSubmitForm)