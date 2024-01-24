var pessoa = {
    nome : "Vinícius",
    idade : 24,
    genero : "Masculino",
    endereço :"Rua Caraibeira, Bairro Cajueiro",

    mostrar : function(){
            console.log("meu nome é "+this.nome+", tenho "+this.idade+" anos e sou do gênero "+
            this.genero+" e moro na "+this.endereço+".");
    },
    mostrar_arrow : () => {
        console.log("meu nome é "+pessoa.nome+", tenho "+pessoa.idade+" anos e sou do gênero "+
        pessoa.genero+" e moro na "+pessoa.endereço+".");
}
}
pessoa.mostrar_arrow()