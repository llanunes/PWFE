function calcularDiferenca(){
    const numero1 = document.getElementById('number1').value;
    const numero2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');
    let subtracao = ''

    if(numero1 < numero2){
        subtracao = numero2 - numero1;
        resultado.textContent = subtracao;
    } else if (numero1 > numero2){
        subtracao = numero1 - numero2;
        resultado.textContent = subtracao;
    }
}

document.getElementById('calcular').addEventListener('click', calcularDiferenca);