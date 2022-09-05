var x = 10;
var y = 11;
var z = 12;
var manter;
function semPara(){
    console.log("não precisa passar valor, posso usar valores locais e globais.");
}
function comPara(numero){
    numero = 5;
    console.log("posso usar o parametro chamando a função e colocando X para o meu parâmetro e ainda assim usar valores globais.");
    console.log("");
    console.log("dentro da função x =", x, "y =", y, "z =", z)

    return numero
}
const arrow = [1, 2, 3, 4] 


semPara()
x = comPara(x)
console.log("fora da função x =",x , "y =", y, "z =", z)
arrow.length>= 2? manter = arrow:null
console.log(manter)

