// task 1
const categoriesEls = document.querySelectorAll('#categories > li.item');

console.log(`У списку ${categoriesEls.length} категорії.`);

categoriesEls.forEach(category => console.log(`Категорія: ${category.querySelector('h2').innerHTML}\nКількість елементів: ${category.querySelectorAll('ul li').length}`));

// task 2
const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

const ingredientsEl = document.querySelector('#ingredients');

// variant 1

const ingredientsLi = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ingredientsLi.forEach(ingredientLi => ingredientsEl.appendChild(ingredientLi));

// variant 2

// ingredients.forEach(ingredient => {
//     const li = document.createElement('li');
//     li.textContent = ingredient;
//     ingredientsEl.appendChild(li)
// });

// task 3
const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const gallery = document.querySelector('#gallery');

const galleryEls = images.map(image => `
    <li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}">
    </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', galleryEls);

// task 4
let counterValue = 0;
const counterEl = document.querySelector('#value');
const incrementBut = document.querySelector('button[data-action="increment"]');
const decrementBut = document.querySelector('button[data-action="decrement"]');
const counterDiv = document.querySelector('#counter');
const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;
incrementBut.addEventListener('click', increment);
decrementBut.addEventListener('click', decrement);
counterDiv.addEventListener('click', () => counterEl.innerHTML = counterValue);
