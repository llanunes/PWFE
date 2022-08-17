'use strict'

// function changeColor() {
//     const color = document.getElementById('color').value;
//     // document.body.style.backgroundColor = `#${color}`;
//     document.documentElement.style.setProperty('--bg-color', `#${color}`);
// }

// document.getElementById('applyButton').addEventListener('click', changeColor);

function changeColor() {
    const color = document.getElementById('color').value.toLowerCase();
    if (color == 'azul') {
        document.documentElement.style.setProperty('--bg-color', '#42BCF6');
    } else if (color == 'vermelho') {
        document.documentElement.style.setProperty('--bg-color', '#F54A3B');
    } else if (color == 'verde') {
        document.documentElement.style.setProperty('--bg-color', '#2DEB81');
    } else if (color == 'amarelo') {
        document.documentElement.style.setProperty('--bg-color', '#EBD45B');
    }
}

document.getElementById('applyButton').addEventListener('click', changeColor);