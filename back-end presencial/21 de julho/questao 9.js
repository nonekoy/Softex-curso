function separador(numero){
    let resto= parseInt(numero/10);
    let digito = numero%10;
    console.log(digito);
    if (resto>0){
        separador(resto);
    }
}
let numero= Number(prompt("Digite o numero:  "));
separador(numero);