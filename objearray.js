class testf{
    constructor(nome, idade, genero){
        this.nome = nome
        this.idade = idade
        this.genero = genero
    }
}
persona1 = new testf("lucas", 15, "masculino");
persona2 = new testf("joão", 16, "masculino");
persona3 = new testf("maria", 17, "feminino");

array1 = [persona1, persona2, persona3]

function listararray(array){
    console.log(array)
}
function listaratributos(obj){
    console.log("nome : " + obj.nome)
    console.log("idade : " + obj.idade)
    console.log("genero : " + obj.genero)
}
listararray(array1)
listaratributos(persona1)
listaratributos(persona2)