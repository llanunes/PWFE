function somar() {
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('result')

    const resultadoSoma = numero1 + ' + ' + numero2 + ' = ' + (parseFloat(numero1) + parseFloat(numero2))
    resultado.textContent = resultadoSoma
}

document.getElementById('somar').addEventListener('click', somar)

function subtrair() {
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')

    const resultadoSubtracao = numero1 + ' - ' + numero2 + ' = ' + (parseFloat(numero1) - parseFloat(numero2))
    resultado.textContent = resultadoSubtracao
}

document.getElementById('subtrair').addEventListener('click', subtrair)

function multiplicar() {
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')

    const resultadoMultiplicacao = numero1 + ' x ' + numero2 + ' = ' + (parseFloat(numero1) * parseFloat(numero2))
    resultado.textContent = resultadoMultiplicacao;
}

document.getElementById('multiplicar').addEventListener('click', multiplicar)

function dividir() {
    const numero1 = document.getElementById('numero1').value
    const numero2 = document.getElementById('numero2').value
    const resultado = document.getElementById('resultado')

    const resultadoDivisao = numero1 + ' / ' + numero2 + ' = ' + (parseFloat(numero1) / parseFloat(numero2))
    resultado.textContent = resultadoDivisao
}

document.getElementById('dividir').addEventListener('click', dividir)