import './styles.css';
import item from './menu.json';
import template from './templates/menu.hbs';

const galleryObjects = template(item);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('afterbegin', galleryObjects);

const changeThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const themeRef = localStorage.getItem('theme');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

checkTheme();

changeThemeRef.addEventListener('change', switchTheme);

function switchTheme(event) {
if (event.target.checked) {
    updateTheme(Theme.DARK, Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
} else {
    updateTheme(Theme.LIGHT, Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
}
}

function checkTheme() {
if (themeRef === Theme.DARK) {
    updateTheme(Theme.DARK, Theme.LIGHT);

    changeThemeRef.checked = true;
} else if (themeRef === Theme.LIGHT) {
    updateTheme(Theme.LIGHT, Theme.DARK);
}
}

function updateTheme(addClass, removeClass) {
bodyRef.classList.add(addClass);
bodyRef.classList.remove(removeClass);
}