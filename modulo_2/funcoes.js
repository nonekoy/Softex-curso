function saudacao() {
    console.log("Olá! Bem-vindo(a)!");
}

function dobrarNumero(numero) {
    return numero * 2;
}
const calcularPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};


saudacao();
const resultadoDobro = dobrarNumero(5);
console.log(resultadoDobro);
const resultadoPotencia = calcularPotencia(2, 3);
console.log(resultadoPotencia);