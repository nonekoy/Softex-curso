// Classe Pato
class Pato {
  quack() {
    console.log("Quack! Quack!");
  }

  voar() {
    console.log("Voando alto!");
  }
}

// Interface Galinha
class Galinha {
  cacarejar() {
    console.log("Cocorocó!");
  }

  voarBaixo() {
    console.log("Voando baixo.");
  }
}

// Adaptador para transformar Pato em Galinha
class AdaptadorPato {
  constructor(pato) {
    this.pato = pato;
  }

  cacarejar() {
    this.pato.quack(); // Adaptando quack para cacarejar
  }

  voarBaixo() {
    this.pato.voar(); // Adaptando voar para voarBaixo
  }
}

// Demo do AdaptadorPato
class AdaptadorPatoDemo {
  static run() {
    const patoSelvagem = new Pato();

    const adaptadorPato = new AdaptadorPato(patoSelvagem);

    console.log("Pato selvagem:");
    patoSelvagem.quack();
    patoSelvagem.voar();

    console.log("\nAdaptadorPato (usado como Galinha):");
    adaptadorPato.cacarejar();
    adaptadorPato.voarBaixo();
  }
}

// Executando a demonstração
AdaptadorPatoDemo.run();
