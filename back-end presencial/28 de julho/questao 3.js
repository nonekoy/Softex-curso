var carro = {
    preço : 1000,
    portas : 4,
    marca : "audi",
    mostrar: function(){
        console.log("preço : "+this.preço);
        console.log("portas : "+this.portas);
        console.log("marca : "+this.marca)
    }
}
console.log("antes de mudar: ")
carro.mostrar();
carro.preço = 3000;
console.log("\ndepois de mudar:")
carro.mostrar();