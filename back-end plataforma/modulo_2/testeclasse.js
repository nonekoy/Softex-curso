class pessoa{
    constructor(nome,salario,idade,diploma){
        this.nome= String(nome);
        this.salario = Number(salario);
        this.idade = Number(idade);
        this.diploma = Boolean(diploma);
    }
}


random = new pessoa("João",1900,23,true)

console.log(random)
console.log(typeof(random.nome))
console.log(typeof(random.salario))
console.log(typeof(random.idade))
console.log(typeof(random.diploma))