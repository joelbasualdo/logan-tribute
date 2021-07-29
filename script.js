
const body = document.querySelector('body');
const button = document.querySelector('button');
const image = document.querySelector('img');

button.addEventListener('click', ()=> {
    body.classList.toggle('theme-switch')
    image.classList.toggle('img-big')
})

