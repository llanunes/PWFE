function parImpar(){
    let numero = document.getElementById('number').value
    let resultado= document.getElementById('resultado');

    if(numero % 2 == 0){
        result = 'O número é par!'
        resultado.textContent = result;
    }else{
        result = 'O número é ímpar!'
        resultado.textContent = result;
    }
}

document.getElementById('calcular').addEventListener('click', parImpar)