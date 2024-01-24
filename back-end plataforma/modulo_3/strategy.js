// Interface Strategy
class Strategy {
  execute(num1, num2) {
    throw new Error("Método execute() deve ser implementado pelas subclasses.");
  }
}

// Classes concretas implementando Strategy
class Soma extends Strategy {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class Subtracao extends Strategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class Multiplicacao extends Strategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

// Contexto que utiliza a estratégia selecionada
class Calculadora {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calcular(num1, num2) {
    return this.strategy.execute(num1, num2);
  }
}

// Função para obter a estratégia com base na operação informada pelo usuário
function obterEstrategia(operacao) {
  switch (operacao) {
    case "+":
      return new Soma();
    case "-":
      return new Subtracao();
    case "*":
      return new Multiplicacao();
    default:
      throw new Error("Operação não suportada.");
  }
}

// Exemplo de uso da calculadora
const readline = require('readline-sync');

const primeiroValor = parseInt(readline.question("Digite o primeiro valor: "));
const segundoValor = parseInt(readline.question("Digite o segundo valor: "));
const operacao = readline.question("Digite a operação (+, -, *): ");

const estrategia = obterEstrategia(operacao);
const calculadora = new Calculadora(estrategia);

const resultado = calculadora.calcular(primeiroValor, segundoValor);
console.log(`Resultado da operação: ${resultado}`);
