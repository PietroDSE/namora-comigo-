let button1 = document.querySelector('button#button1');
let button2 = document.querySelector('button#button2');

button1.addEventListener('click', () =>{
    window.location.href ='yes.html'
})
function moveBtn(button) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Dimensões do botão
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;

    // Posições aleatórias dentro da viewport, considerando as dimensões do botão
    const randomLeft = Math.random() * (windowWidth - buttonWidth);
    const randomTop = Math.random() * (windowHeight - buttonHeight);

    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

button2.addEventListener('mouseenter', () => {
    moveBtn(button2);
});

// evento de redimensionamento da janela para ajustar a posição se a janela for redimensionada
window.addEventListener('resize', () => {
    moveBtn(button2);
});

// moveBtn para posicionar o botão2 inicialmente
moveBtn(button2);
