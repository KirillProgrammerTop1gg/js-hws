// task 1
// let gallery = document.querySelector('.gallery');
// document.addEventListener('keydown', (event) => {
//     console.log(event.code);
//     switch (event.code) {
//         case 'ArrowLeft':
//             gallery.scrollLeft -= 5;
//             break;
//         case 'ArrowRight':
//             gallery.scrollLeft += 5;
//             break;
//     }
// });

const imagesEl = document.querySelectorAll(".image");
const fullImageElContainerEl = document.querySelector(".full-image-container");
const fullImageEl = document.querySelector(".full-image");
let currentIndex = 0;

const showfullImage = (index) => {
    fullImageEl.src = imagesEl[index].src;
    fullImageElContainerEl.style.display = "block";
    currentIndex = index;
}

const hidefullImageEl = () => fullImageElContainerEl.style.display = "none";

imagesEl.forEach((image, index) => image.addEventListener("click", () => showfullImage(index)));

fullImageElContainerEl.addEventListener("click", hidefullImageEl);

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            currentIndex > 0 ? showfullImage(currentIndex-1) : null;
            e.preventDefault();
            break;
        case 'ArrowRight':
            currentIndex < imagesEl.length-1 ? showfullImage(currentIndex+1) : null;
            e.preventDefault();
            break;
        default:
            hidefullImageEl();
    }
});

// task 2
const boxesEl = document.querySelector('#boxes');
const renderButEl = document.querySelector('button[data-action="render"]');
const destroyButEl = document.querySelector('button[data-action="destroy"]');
const amountInputEl = document.querySelector('#controls > input[type="number"]');
const createBoxes = (amount) => {
    for (let i = 0; i < amount; i++) {
        boxesEl.innerHTML += `
            <div style='display: flex; width: ${30+i*10}px; height: ${30+i*10}px; background-color: rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})'></div>
        `;
    }
}
const destroyBoxes = () => boxesEl.innerHTML = '';
renderButEl.addEventListener('click', () => createBoxes(amountInputEl.value));
destroyButEl.addEventListener('click', () => destroyBoxes());
