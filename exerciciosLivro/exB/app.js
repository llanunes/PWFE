function calcular (){
    let numero = document.getElementById('number').value
    let resultado = document.getElementById('resultado');
    let conversao = ''

    if (numero > 0){
        resultado.textContent = numero;
    }else{
        conversao = numero * -1
        resultado.textContent = conversao;
    }
}
    document.getElementById('calcular').addEventListener('click', calcular);
    