export function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Fechar menu ao clicar em link (mobile)
export function initMenuLinks() {
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href');
            loadPage(page); // SPA navigation
            const navMenu = document.getElementById("navMenu");
            navMenu.classList.remove('show');
        });
    });
}

// SPA loader
export function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = document.querySelector('main');
            const newContent = doc.querySelector('main');
            mainContent.innerHTML = newContent.innerHTML;
            window.history.pushState({page}, '', page);
            initForm(); // re-inicializa scripts se for formulário
        });
}