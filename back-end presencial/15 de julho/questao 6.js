let num = Number(prompt("Digite o numero 1  "))
let maior = num
num = Number(prompt("Digite o numero 2  "))
if (num>maior){
    maior = num
}
num = Number(prompt("Digite o numero 3  "))
if (num>maior){
    maior = num
}
console.log("o maior numero dos 3 é: "+ maior)