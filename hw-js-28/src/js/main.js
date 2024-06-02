// import students from './students.json';
// Я тільки так придумав зберігати
const students = JSON.parse(localStorage.getItem('students')) !== null ? JSON.parse(localStorage.getItem('students')) : []; 

const showStudents = (obj) => {
    document.querySelectorAll('input[required]').forEach(input => input.value = '');
    localStorage.setItem('students', JSON.stringify(students))
    document.querySelector('.students').innerHTML = `<tr>
        <td>Номер</td>
        <td>ім'я</td>
        <td>прізвище</td>
        <td>вік</td>
        <td>курс</td>
        <td>факультет</td>
        <td>список курсів</td>
        <td>видалити</td>
        <td>редагувати</td>
    </tr>`
    obj.forEach((student, idx) => document.querySelector('.students').innerHTML += `
        <tr class='students__student' data-id=${idx}>
            <td>${student.num+1}</td>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.faculty}</td>
            <td>${student.course_list.join(', ')}</td>
            <td><button class='students__close'><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 729.837 729.838" style="enable-background:new 0 0 729.837 729.838;" xml:space="preserve"><g>	<g>		<g>			<path d="M589.193,222.04c0-6.296,5.106-11.404,11.402-11.404S612,215.767,612,222.04v437.476c0,19.314-7.936,36.896-20.67,49.653				c-12.733,12.734-30.339,20.669-49.653,20.669H188.162c-19.315,0-36.943-7.935-49.654-20.669				c-12.734-12.734-20.669-30.313-20.669-49.653V222.04c0-6.296,5.108-11.404,11.403-11.404c6.296,0,11.404,5.131,11.404,11.404				v437.476c0,13.02,5.37,24.922,13.97,33.521c8.6,8.601,20.503,13.993,33.522,13.993h353.517c13.019,0,24.896-5.394,33.498-13.993				c8.624-8.624,13.992-20.503,13.992-33.498V222.04H589.193z"/>			<path d="M279.866,630.056c0,6.296-5.108,11.403-11.404,11.403s-11.404-5.107-11.404-11.403v-405.07				c0-6.296,5.108-11.404,11.404-11.404s11.404,5.108,11.404,11.404V630.056z"/>			<path d="M376.323,630.056c0,6.296-5.107,11.403-11.403,11.403s-11.404-5.107-11.404-11.403v-405.07				c0-6.296,5.108-11.404,11.404-11.404s11.403,5.108,11.403,11.404V630.056z"/>			<path d="M472.803,630.056c0,6.296-5.106,11.403-11.402,11.403c-6.297,0-11.404-5.107-11.404-11.403v-405.07				c0-6.296,5.107-11.404,11.404-11.404c6.296,0,11.402,5.108,11.402,11.404V630.056L472.803,630.056z"/>			<path d="M273.214,70.323c0,6.296-5.108,11.404-11.404,11.404c-6.295,0-11.403-5.108-11.403-11.404				c0-19.363,7.911-36.943,20.646-49.677C283.787,7.911,301.368,0,320.73,0h88.379c19.339,0,36.92,7.935,49.652,20.669				c12.734,12.734,20.67,30.362,20.67,49.654c0,6.296-5.107,11.404-11.403,11.404s-11.403-5.108-11.403-11.404				c0-13.019-5.369-24.922-13.97-33.522c-8.602-8.601-20.503-13.994-33.522-13.994h-88.378c-13.043,0-24.922,5.369-33.546,13.97				C278.583,45.401,273.214,57.28,273.214,70.323z"/>			<path d="M99.782,103.108h530.273c11.189,0,21.405,4.585,28.818,11.998l0.047,0.048c7.413,7.412,11.998,17.628,11.998,28.818				v29.46c0,6.295-5.108,11.403-11.404,11.403h-0.309H70.323c-6.296,0-11.404-5.108-11.404-11.403v-0.285v-29.175				c0-11.166,4.585-21.406,11.998-28.818l0.048-0.048C78.377,107.694,88.616,103.108,99.782,103.108L99.782,103.108z				 M630.056,125.916H99.782c-4.965,0-9.503,2.02-12.734,5.274L87,131.238c-3.255,3.23-5.274,7.745-5.274,12.734v18.056h566.361				v-18.056c0-4.965-2.02-9.503-5.273-12.734l-0.049-0.048C639.536,127.936,635.021,125.916,630.056,125.916z"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button></td>
            <td><button class='students__open'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px"><path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"/></svg></button></td>
        </tr>
    `);
}

const isValid = (form) => {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    inputs.forEach(input => isValid = input.value.trim() ? (input.classList.remove('invalid-input'), true) : (input.classList.add('invalid-input'), false));
    return isValid;
}

students.map((student, idx) => student.num = idx);
showStudents(students);

document.querySelector('.students').addEventListener('click', (e) => {
    if (e.target.closest('.students__close') !== null) {
        students.splice(e.target.closest('.students__student').dataset.id, 1)
        showStudents(students);
    }
    if (e.target.closest('.students__open') !== null) {
        document.querySelector('.backdrop').classList.remove('is-hidden');
        document.querySelector('.modal__form').setAttribute('data-id', e.target.closest('.students__student').dataset.id)
    }
})

document.querySelector('.modal__button').addEventListener('click', (e) => {
    document.querySelector('.backdrop').classList.add('is-hidden');
});

document.querySelector('.addStudent__submit').addEventListener('click', (e) => {
    e.preventDefault();
    if (!isValid(document.querySelector('.addStudent__form'))) {
        return;
    }
    students.push({
        "name": document.querySelector('.addStudent__firstName').value,
        "surname": document.querySelector('.addStudent__lastName').value,
        "age": document.querySelector('.addStudent__age').value,
        "course": document.querySelector('.addStudent__year').value,
        "faculty": document.querySelector('.addStudent__faculty').value,
        "course_list": document.querySelector('.addStudent__courses').value.replaceAll(' ', '').split(','),
        "num": students.length > 0 ? students[students.length - 1].num + 1 : 0
    });
    showStudents(students);
});

document.querySelector('.modal__submit').addEventListener('click', (e) => {
    e.preventDefault();
    students[e.target.closest('.modal__form').dataset.id] = {
        "name": document.querySelector('.modal__firstName').value !== '' ? document.querySelector('.modal__firstName').value : students[e.target.closest('.modal__form').dataset.id].name,
        "surname": document.querySelector('.modal__lastName').value !== '' ? document.querySelector('.modal__lastName').value : students[e.target.closest('.modal__form').dataset.id].surname,
        "age": document.querySelector('.modal__age').value !== '' ? document.querySelector('.modal__age').value : students[e.target.closest('.modal__form').dataset.id].age,
        "course": document.querySelector('.modal__year').value !== '' ? document.querySelector('.modal__year').value : students[e.target.closest('.modal__form').dataset.id].course,
        "faculty": document.querySelector('.modal__faculty').value !== '' ? document.querySelector('.modal__faculty').value : students[e.target.closest('.modal__form').dataset.id].faculty,
        "course_list": document.querySelector('.modal__courses').value !== '' ? document.querySelector('.modal__courses').value.replaceAll(' ', '').split(',') : students[e.target.closest('.modal__form').dataset.id].course_list,
        "num": students[e.target.closest('.modal__form').dataset.id].num
    };
    showStudents(students);
    document.querySelector('.backdrop').classList.add('is-hidden');
});