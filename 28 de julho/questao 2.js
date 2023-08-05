nome_completo ={
    nome :"Vinícius",
    sobrenome : "De Carvalho",

    nome_todo: function(){
        return (this.nome+" "+this.sobrenome)
    }
}
console.log("Olá " + nome_completo.nome_todo())