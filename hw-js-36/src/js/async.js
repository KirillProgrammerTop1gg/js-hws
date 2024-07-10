import { getImgs } from './apiService.js';
const { alert, notice, info, success, error } = require('@pnotify/core');
const _ = require('lodash');
import * as basicLightbox from 'basiclightbox'; 

let page = 1;
let query = '';
let modals = [];

const searchQuery = _.debounce(() => getImgs(query, page).then(imgs => {
    if (imgs.data.hits.length !== 0) {
        if (document.querySelector('.senitel')) document.querySelector('.senitel').remove();
        imgs.data.hits.forEach(img => (document.querySelector('.gallery').innerHTML += `
            <div class="photo-card">
                <button class="open-modal" data-img=${modals.length}>
                    <img src="${img.webformatURL}" alt="${img.tags}" class="photo"/>
                </button>
                <div class="stats">
                    <p class="stats-item">
                        <i class="material-icons">thumb_up</i>
                        ${img.likes}
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">visibility</i>
                        ${img.views}
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">comment</i>
                        ${img.comments}
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">cloud_download</i>
                        ${img.downloads}
                    </p>
                </div>
            </div>
        `, modals.push(basicLightbox.create(`
            <img src="${img.largeImageURL}" alt="${img.tags}" />
        `))));
        document.querySelector('.gallery').innerHTML += `<div class="senitel"></div>`;
        setTimeout(() => new IntersectionObserver((entries) => entries[0].isIntersecting && (page += 1, searchQuery()), { root: null, rootMargin: '0px', threshold: 0.1 }).observe(document.querySelector('.senitel')), 500);
    }
    else {
        error({
            text: "No matches found! Please enter correct query!",
            delay: 3000,
            closer: false,
            addClass: 'error'
        });
    }
}), 500);

document.querySelector('.search-form>input').addEventListener('input', (e) => document.querySelector('.search-form>input').value.trim() !== '' ? (document.querySelector('.gallery').innerHTML = '', modals = [], query = document.querySelector('.search-form>input').value, page = 1, searchQuery()) : error({
    text: "No matches found! Please enter correct query!",
    delay: 3000,
    closer: false,
    addClass: 'error'
}));

document.querySelector('.gallery').addEventListener('click', (e) => e.target.closest('.open-modal') !== null ? modals[e.target.closest('.open-modal').dataset.img].show() : null);