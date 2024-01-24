// Carro
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
        this.velocidade = 0;
    }

    iniciar() {
        this.ligado = true;
        console.log(`O carro ${this.marca} ${this.modelo} está ligado.`);
    }

    parar() {
        this.ligado = false;
        this.velocidade = 0;
        console.log(`O carro ${this.marca} ${this.modelo} está parado.`);
    }

    acelerar(velocidade) {
        if (this.ligado) {
            this.velocidade += velocidade;
            console.log(`O carro ${this.marca} ${this.modelo} está a ${this.velocidade} km/h.`);
        } else {
            console.log(`O carro ${this.marca} ${this.modelo} precisa estar ligado para acelerar.`);
        }
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.iniciar();
meuCarro.acelerar(60);
meuCarro.parar();

// Livro
class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.aberto = false;
        this.paginaAtual = 1;
    }

    abrir() {
        this.aberto = true;
        console.log(`O livro "${this.titulo}" de ${this.autor} está aberto na página ${this.paginaAtual}.`);
    }

    fechar() {
        this.aberto = false;
        console.log(`O livro "${this.titulo}" de ${this.autor} está fechado.`);
    }

    virarPagina() {
        if (this.aberto) {
            this.paginaAtual++;
            console.log(`Virou para a página ${this.paginaAtual}.`);
        } else {
            console.log(`Abra o livro para virar a página.`);
        }
    }
}

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
meuLivro.abrir();
meuLivro.virarPagina();
meuLivro.fechar();



class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    calcularDesconto(percentual) {
        const desconto = (percentual / 100) * this.preco;
        return this.preco - desconto;
    }

    atualizarDescricao(novaDescricao) {
        this.descricao = novaDescricao;
    }

    obterInformacoes() {
        return `Produto: ${this.nome}\nPreço: R$ ${this.preco}\nDescrição: ${this.descricao}`;
    }
}

const produto1 = new Produto("Smartphone", 1000, "Um smartphone avançado");
console.log(produto1.obterInformacoes());
console.log(`Preço com 10% de desconto: R$ ${produto1.calcularDesconto(10)}`);
produto1.atualizarDescricao("Um smartphone com câmera de alta resolução.");
console.log(produto1.obterInformacoes());



class Pedido {
    constructor(numero, data) {
        this.numero = numero;
        this.data = data;
        this.itens = [];
    }

    adicionarItem(produto, quantidade) {
        this.itens.push({ produto, quantidade });
    }

    calcularTotal() {
        let total = 0;
        for (const item of this.itens) {
            total += item.produto.preco * item.quantidade;
        }
        return total;
    }

    imprimirRecibo() {
        console.log(`Pedido #${this.numero} - Data: ${this.data}`);
        console.log("Itens do Pedido:");
        for (const item of this.itens) {
            console.log(`- ${item.quantidade}x ${item.produto.nome}: R$ ${item.produto.preco * item.quantidade}`);
        }
        console.log(`Total do Pedido: R$ ${this.calcularTotal()}`);
    }
}

const pedido1 = new Pedido(1, "2023-10-17");
pedido1.adicionarItem(produto1, 2);

const produto2 = new Produto("Tablet", 500, "Um tablet compacto");
pedido1.adicionarItem(produto2, 1);

pedido1.imprimirRecibo();
