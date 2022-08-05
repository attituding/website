const navButton = document.getElementById('navButton') as HTMLButtonElement;
const nav = document.getElementById('nav') as HTMLDivElement;

const navLocalStorage = localStorage.getItem('nav');

const isNavShown = nav.classList.contains('hidden') === false;

const shouldBeShown = navLocalStorage
    ? JSON.parse(navLocalStorage)
    : isNavShown;

if (isNavShown !== shouldBeShown) {
    nav.classList.toggle('hidden');
}

navButton.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    const state = JSON.stringify(nav.classList.contains('hidden') === false);
    localStorage.setItem('nav', state);
});