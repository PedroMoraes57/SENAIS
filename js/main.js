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
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.cursosSENAIS');

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
    const elements = document.querySelectorAll('.feedback');

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
    const elements = document.querySelectorAll('.efeitocirculo');

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
    const elements = document.querySelectorAll('.conteudoFAQS');

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
    const elements = document.querySelectorAll('.container-utilizarIA');

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
document.addEventListener("DOMContentLoaded", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Quando rolar 300px para baixo
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rola suavemente até o topo
        });
    });
});



