function resta(nota1,nota2){
    let resto = 21-(nota1+nota2);
    return ("Você precisa tirar mais "+resto+" para passar com média.")
};

function media(nota1, nota2, nota3){
    let mediafinal = (nota1+nota2+nota3)/3;
    return mediafinal>=7?("Você passou, parabéns!!!"):("Infelizmente você não foi aprovado.");
}

let not1,not2,not3;

not1 = 8.5;
not2 = 7.5;
not3 = 9;

console.log(media(not1,not2,not3));