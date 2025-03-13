document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.porqueutilizar');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Verifica se algum elemento está visível ao carregar a página
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.sobrenos');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Verifica se algum elemento está visível ao carregar a página
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.proposito');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Verifica se algum elemento está visível ao carregar a página
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.linhadiv');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Verifica se algum elemento está visível ao carregar a página
});




