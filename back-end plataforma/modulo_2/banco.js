class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }

    getSaldo() {
        return this.saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    getConta() {
        return this.conta;
    }
}

// Exemplo de uso
const minhaConta = new Banco(123456, 1000, "Corrente", "123");
console.log("Saldo atual:", minhaConta.getSaldo());
minhaConta.deposito(500);
console.log("Saldo após depósito:", minhaConta.getSaldo());
minhaConta.saque(300);
console.log("Saldo após saque:", minhaConta.getSaldo());
console.log("Número da conta:", minhaConta.getConta());
