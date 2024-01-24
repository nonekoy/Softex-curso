// Interface para o componente base (Sanduíche)
class Sanduiche {
  constructor() {
    this.descricao = "Sanduíche";
  }

  custo() {
    return 0.0;
  }
}

// Implementação do componente base (Sanduíche de Frango Assado)
class FrangoAssado extends Sanduiche {
  constructor() {
    super();
    this.descricao = "Sanduíche de Frango Assado";
  }

  custo() {
    return 4.50;
  }
}

// Decorator abstrato
class Decorator extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  custo() {
    return this.sanduiche.custo();
  }

  descricao() {
    return this.sanduiche.descricao;
  }
}

// Implementações concretas de Decorators
class Pepperoni extends Decorator {
  constructor(sanduiche) {
    super(sanduiche);
    this.descricao = this.sanduiche.descricao + ", Pepperoni";
  }

  custo() {
    return this.sanduiche.custo() + 0.99;
  }
}

class QueijoMussarelaRalado extends Decorator {
  constructor(sanduiche) {
    super(sanduiche);
    this.descricao = this.sanduiche.descricao + ", Queijo Mussarela Ralado";
  }

  custo() {
    return this.sanduiche.custo() + 2.00;
  }
}

// Exemplo de uso
const sanduicheBase = new FrangoAssado();
const sanduicheComPepperoni = new Pepperoni(sanduicheBase);
const sanduicheFinal = new QueijoMussarelaRalado(sanduicheComPepperoni);

console.log(`${sanduicheFinal.descricao} custa $${sanduicheFinal.custo().toFixed(2)}.`);
