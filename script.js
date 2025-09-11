const navMenuOpenBtn = document.querySelector(`.nav-menu-open`);
const navMenuCloseBtn = document.querySelector(`.nav-menu-close`);
const menu = document.querySelector(`nav`);

navMenuOpenBtn.addEventListener('click', () => {
    menu.classList.add(`open`);
})

navMenuCloseBtn.addEventListener('click', () => {
    menu.classList.remove(`open`);
})