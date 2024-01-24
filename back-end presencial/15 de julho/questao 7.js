let salario= Number(prompt("digite o seu salario   : "))
let liquido= 0
console.log("Seu salário era: R$"+salario.toFixed(2))
if (salario <280){
    liquido = salario*1.20
    console.log("O reajuste é de 20%")
}else{
    if(salario<700){
        liquido = salario*1.15
        console.log("O reajuste é de 15%")
    }else{
        if (salario < 1500){
            liquido = salario*1.10
            console.log("O reajuste é de 10%")
        }else{
            liquido = salario*1.05
            console.log("O reajuste é de 5%")
        }
    }
}
console.log("Seu salário final é : R$"+liquido.toFixed(2))