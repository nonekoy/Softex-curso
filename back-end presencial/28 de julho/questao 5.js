prejuizo_familiar ={
    receitas : [],
    despesas : [],

    depositar : function(dinheiro){
        this.receitas.push(dinheiro)
    },
    descontar : function(despesa){
        this.despesas.push(despesa)
    },
    receitatotal: function(){
        let total=0;
        for (let i = 0; i< this.receitas.length;i++){
            total+=this.receitas[i];
        }
        return ("R$"+total.toFixed(2));
    },
    despesatotal: function(){
        let total=0;
        for (let i = 0; i< this.despesas.length;i++){
            total+=this.despesas[i];
        }
        return ("R$"+total.toFixed(2));
    }

}
prejuizo_familiar.depositar(100, 200, 300);
prejuizo_familiar.depositar(200);
prejuizo_familiar.depositar(300);

console.log(prejuizo_familiar.receitas);
console.log(prejuizo_familiar.receitatotal());
prejuizo_familiar.descontar(300);
prejuizo_familiar.descontar(500);
prejuizo_familiar.descontar(100);
console.log(prejuizo_familiar.despesas);
console.log(prejuizo_familiar.despesatotal());
