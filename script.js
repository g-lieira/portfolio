const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');

function atualizarCorHeader() {
    const scrollThreshold = window.innerHeight * 0.9;

    if (window.scrollY >= scrollThreshold || menuToggle.checked) {
        header.classList.add('header-black');
    } else {
        setTimeout(() => {
            if (!menuToggle.checked) {
                header.classList.remove('header-black');
            }
        }, 300); 
    }
}


window.addEventListener('scroll', atualizarCorHeader);

menuToggle.addEventListener('change', atualizarCorHeader);
