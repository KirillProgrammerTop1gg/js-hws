// 1-task
const imgs = document.querySelectorAll('img[data-src]');

const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add('load')
            entry.target.removeAttribute('data-src');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(onEntry, {
    rootMargin: '50px',
    threshold: 0.5,
});

imgs.forEach(img => observer.observe(img));

// 2-task
const imgsD = document.querySelectorAll('img[data-srcD]');

imgsD.forEach(imgD => imgD.addEventListener('click', (e) => {
    e.target.src = e.target.dataset.srcd;
    e.target.style.width = 'auto';
    e.target.style.backgroundColor = 'transparent';
    e.target.classList.add('load');
    e.target.addEventListener('transitionend', () => {
        e.target.classList.remove('load');
    }, {once: true});
}))