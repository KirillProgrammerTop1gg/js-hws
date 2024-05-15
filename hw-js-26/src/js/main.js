import formData from '../data.js';
const nameEl = document.querySelector('#input_name');
const emailEl = document.querySelector('#input_email');
const msgEl = document.querySelector('#input_msg');
const sendEl = document.querySelector('#but_send');
const infoEl = document.querySelector('#info')

sendEl.addEventListener('click', (e) => {
    e.preventDefault();
    formData.name = nameEl.value;
    formData.email = emailEl.value;
    formData.msg = msgEl.value;
    infoEl.innerHTML = `Форма успішно відправленна!`;
});

