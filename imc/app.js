'use strict'


function mostrarResultado(){
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = document.getElementById('peso').value;
    const imcForm = document.getElementById('imc-form');
    const resultado = document.getElementById('resultado');

    if (imcForm.reportValidity()){
        const valorIMC = (peso / altura ** 2).toFixed(2);
        let classificacao = ""

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!'
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.'
        }else if(valorIMC < 35 ){
            classificacao = 'com obesidade grau I.'
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II'
        }else{
            classificacao = 'com obesidade grau III. Cuidado!'
        }
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`
    }
       
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);