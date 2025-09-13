const navMenuOpenBtn = document.querySelector(`.nav-menu-open`);
const navMenuCloseBtn = document.querySelector(`.nav-menu-close`);
const menu = document.querySelector(`nav`);
const closedOverlay = document.querySelector(`.closed-overlay`);

navMenuOpenBtn.addEventListener('click', () => {
    menu.classList.add(`open`);
    closedOverlay.classList.add(`enabled`);
})

navMenuCloseBtn.addEventListener('click', () => {
    menu.classList.remove(`open`);
    closedOverlay.classList.remove(`enabled`);
})