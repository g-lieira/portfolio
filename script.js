window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // Calcula 90% da altura da janela (viewport)
    const scrollThreshold = window.innerHeight * 0.8;
    
    // Verifica se o scroll vertical da página atingiu 100vh
    if (window.scrollY >= scrollThreshold) {
        header.classList.add('header-black');
    } else {
        header.classList.remove('header-black');
    }
});