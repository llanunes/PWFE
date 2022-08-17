
function calcularMedia(){
    let nota1 = +document.getElementById('number1').value
    let nota2 = +document.getElementById('number2').value
    let nota3 = +document.getElementById('number3').value 
    let nota4 = +document.getElementById('number4').value
    let media = '';
    let resultado = document.getElementById('resultado')

    media = parseFloat((nota1 + nota2 + nota3 + nota4) / 4)
    resultado.textContent = media.toFixed(1);
}

document.getElementById('calcular').addEventListener('click', calcularMedia);