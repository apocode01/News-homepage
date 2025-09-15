const navMenuOpenBtn = document.querySelector(`.nav-menu-open`);
const navMenuCloseBtn = document.querySelector(`.nav-menu-close`);
const menu = document.querySelector(`nav`);
const closedOverlay = document.querySelector(`.overlay`);

navMenuOpenBtn.addEventListener('click', () => {
    if (menu.classList.contains(`closed`)) {
        menu.classList.replace(`closed`, `open`);
    }
    else menu.classList.add(`open`);
    closedOverlay.classList.add(`enabled`);
})

navMenuCloseBtn.addEventListener('click', () => {
    menu.classList.replace(`open`, `closed`);
    closedOverlay.classList.remove(`enabled`);
})

const mq = window.matchMedia("(max-width: 29.5rem)");
mq.addEventListener("change", (e) => {
    if (!e.matches) {
        menu.classList.remove("closed", "open");
        closedOverlay.classList.remove("enabled");
    }
});