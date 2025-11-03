import { toggleMenu, initMenuLinks, loadPage } from './menu.js';
import { initForm } from './form.js';

document.addEventListener("DOMContentLoaded", () => {
    initMenuLinks();
    initForm();
});

// Reatribuir toggleMenu para HTML onclick
window.toggleMenu = toggleMenu;
window.loadPage = loadPage;
window.initForm = initForm;

// Suporte ao SPA back/forward
window.addEventListener('popstate', event => {
    if(event.state?.page) loadPage(event.state.page);
});