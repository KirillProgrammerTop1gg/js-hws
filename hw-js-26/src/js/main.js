import formData from './data.js';
const nameEl = document.querySelector('#input_name');
const emailEl = document.querySelector('#input_email');
const msgEl = document.querySelector('#input_msg');
const sendEl = document.querySelector('#but_send');
const infoEl = document.querySelector('#info')

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

sendEl.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const msg = msgEl.value.trim();
    !name ? infoEl.textContent = "Будь ласка, введіть ім'я." : null;
    !email ? infoEl.textContent = 'Будь ласка, введіть електронну пошту.' : null;
    !validateEmail(email) ? 'Будь ласка, введіть коректну електронну пошту.' : null;
    !msg ? infoEl.textContent = 'Будь ласка, введіть повідомлення.' : null;
    msg.length > 500 ? infoEl.textContent = 'Повідомлення не повинно перевищувати 500 символів.' : null;
    formData.name = name;
    formData.email = email;
    formData.msg = msg;
    infoEl.textContent = 'Форма успішно відправленна!';
});