// 1. Função para alternar o Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

// 2. Função para aumentar/diminuir o tamanho da fonte dinamicamente
let currentSize = 1; // em rem
function changeFontSize(direction) {
    currentSize += direction * 0.1;
    // Limites para segurança do layout
    if (currentSize < 0.8) currentSize = 0.8;
    if (currentSize > 1.6) currentSize = 1.6;
   
    document.documentElement.style.fontSize = currentSize + 'rem';
}

// Carregar preferência salva de contraste ao iniciar
window.onload = function() {
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
};
