const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const keyLS = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(keyLS)) ?? { email:'', message:'' };
email.value = formData.email ?? '';
message.value = formData.message ?? '';

form.addEventListener('input', () => {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    const jsonData = JSON.stringify(formData);
    localStorage.setItem(keyLS, jsonData);
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
    }

    console.log(formData);
    
    form.reset();
    localStorage.removeItem(keyLS);  
});

