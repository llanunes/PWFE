function ordemCrescente(){
    let A = document.getElementById('number1').value 
    let B = document.getElementById('number2').value
    let C = document.getElementById('number3').value
    let resultado = document.getElementById('resultado')

    let numbers = [A, B, C]
    numbers.sort();
    resultado.textContent = numbers.join(', ');
}

document.getElementById('calcular').addEventListener('click', ordemCrescente)