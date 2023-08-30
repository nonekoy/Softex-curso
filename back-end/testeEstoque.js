class EstoqueGeral{
    constructor(){
        this.estoque=[];
    }
    SetEstoque(produto){
        this.estoque.push(produto);
    }
    mostrar(){
        this.estoque.forEach(element => {
            console.log(element)
        });
    }
}

class Produto{
    constructor(nome,valor,quantidade){
        this.nome= nome;
        this.valor= valor;
        this.quantidade=quantidade;
    }
    AdicionarEstoque(quantidade){
        this.quantidade+=quantidade;
    }
}

estoque = new EstoqueGeral();
paçoca = new Produto("paçoca",1,50);
maça = new Produto("Maça",2,20);
chocolate = new Produto("chocolate",1.5,15);

estoque.SetEstoque(paçoca);
estoque.SetEstoque(maça);
estoque.SetEstoque(chocolate);
estoque.mostrar();

maça.AdicionarEstoque(20);

estoque.mostrar();


