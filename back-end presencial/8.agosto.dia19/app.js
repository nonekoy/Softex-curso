const array = ["joão",'felipe','saulo','neto','ricardo','matheus','gabriel','jonas','emanuel','natan'];
const func = document.getElementById('inputfuncionario');
const resultado = document.querySelector('#result');
let mensagem = 0
function procurar(){
    let check = func.value.toLowerCase();
    if (array.includes(check,0)){
        mensagem = "Existe"
    }else{
        mensagem = "Não existe"
    }
    resultado.innerHTML=mensagem
}
const nome = document.querySelector('#nome')
const mensalidade = document.querySelector('#mensalidade')
const tempo = document.querySelector('#tempoDeCont')
const fim = document.querySelector('#resultado')
let alerta = 0;
let taxaDeJuros = 51/100;
function calcular(){
    total = Number(mensalidade.value)*Math.pow((1+taxaDeJuros),(Number(tempo.value)-1)/taxaDeJuros);
    alerta = ("Olá "+nome.value+", juntando R$"+mensalidade.value+" todo mês, você terá R$"+(total.toFixed(2))+" em "+ tempo.value+" meses");
    fim.innerHTML = alerta;
}