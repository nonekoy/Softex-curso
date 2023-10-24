class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        const clone = Object.create(this);
        return clone;
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
        super(modelo, marca, cor, numeroRodas);
        this.cilindradas = cilindradas;
    }

    represent() {
        return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
}

class Aplicacao {
    static criarVeiculos() {
        const veiculos = [
            new Carro("Sedan", "Toyota", "Prata", 4, 4),
            new Carro("SUV", "Ford", "Vermelho", 4, 2),
            new Moto("Sport", "Honda", "Azul", 2, 600),
            new Moto("Cruiser", "Harley-Davidson", "Preto", 2, 1200),
            new Moto("Pop 100", "Honda", "Branca", 2, 110),
            new Carro ("Civid", "Renault", "Prata", 4, 4)
        ];

        return veiculos;
    }

    static clonarVeiculos(veiculos) {
        const clones = veiculos.map(veiculo => veiculo.clone());
        return clones;
    }

    static imprimirRepresentacoes(veiculos) {
        for (const veiculo of veiculos) {
            console.log(veiculo.represent());
        }
    }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);
Aplicacao.imprimirRepresentacoes(clones);
