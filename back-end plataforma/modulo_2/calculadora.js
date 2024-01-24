function calcular(num1, num2, op){
    if (op=='+'){
        return (num1+num2);
    }
    if (op=='-'){
        return (num1-num2);
    }
    if (op=='*'){
        return (num1*num2);
    }
    if (op=='/'){
        if (num2==0){
            return ("Não é possível calcular");
        }
        return (num1/num2);
    }
}

let num1, num2, operador;
num1 = 2;
num2= 0;
operador = '/';
try{
    
    console.log(calcular(num1,num2,operador));
}catch{
    console.log("Erro, tente novamente.");
}