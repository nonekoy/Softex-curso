function meuBanco(conta, saldo, TdC, agencia){
    this.conta= conta;
    this.saldo = saldo;
    this.tipoDeConta = TdC;
    this.agencia = agencia;
    this.buscarsaldo= function(){
        console.log("O saldo da conta é "+ this.saldo);
    };
    this.depositar = function(deposito){
        this.saldo= this.saldo+deposito;
        console.log("foi depositado "+deposito+" na sua conta");
    };
    this.sacar = function(saque){
        this.saldo= this.saldo-saque;
        console.log("você sacou "+ saque);
    };
    this.meunumero= function(){
        console.log("Meu numero de conta é "+ this.conta);
    };
};
var banco1 = new meuBanco('00001', 1000, 'corrente', '001');
banco1.sacar(3000);
banco1.buscarsaldo();
banco1.depositar(5000);
banco1.buscarsaldo();
banco1.meunumero();