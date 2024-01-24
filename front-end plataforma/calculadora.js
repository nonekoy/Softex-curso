function operacao(){
    var valor1 = document.getElementById('input1').value;
    var valor2 = document.getElementById('input2').value;
    var operador = document.getElementById('input3').value;
    var soma = Number(valor1) + Number(valor2);
    var subtracao = Number(valor1) - Number(valor2);
    var multiplicacao = Number(valor1)*Number(valor2);
    var divisao = Number(valor1)/Number(valor2);
    var resultado= document.getElementById('resultado');
    switch(operador){
        case '+':
            resultado.innerHTML = `O resultado da soma foi : ${soma.toFixed(2)} `
            break
        case '-':
            resultado.innerHTML = `O resultado da subtração foi : ${subtracao.toFixed(2)} `
            break
        case '*':
            resultado.innerHTML = `O resultado da multiplicacao foi : ${multiplicacao.toFixed(2)} `
            break
        case '/':
                resultado.innerHTML = `O resultado da divisao foi : ${divisao.toFixed(2)} `
                break
        default:
            resultado.innerHTML = 'ERRO'
    }
}