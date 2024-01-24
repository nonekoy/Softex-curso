class lista{
    constructor(){
        this.proximo = null
        this.contador = 0
    }
    adicionarPrimeiro(objeto){
        objeto.proximo=this.proximo;
        this.proximo=objeto;
        this.contador++;
    }
    listaVazia(){
        return this.proximo==null||contador==0;
    }
    adicionarPosicao(objeto,contador){
        if (contador>this.contador&& contador<1){
            console.log("operação inválida");
        }else{
            let aux = this.proximo;
            for (let i=0;i<contador-1;i++){
                aux = aux.proximo
            }
            objeto.proximo = aux.proximo;
            aux.proximo= objeto; 
            this.contador+=1
        }
    }
    getCount(){
        return this.contador+" objetos na lista atualmente.";
    }

    mostrarTudo(){
        if (this.contador===0){
            return null
        }else {
            let listax= new lista()
            listax = this.proximo;
            let cont = 1
            console.log(cont+"- nome :"+listax.nome+", idade :"+ listax.idade)
            while (listax.proximo != null){
                cont ++
                listax= listax.proximo;
                console.log(cont+"- nome :" + listax.nome+", idade :"+ listax.idade)
            }
        }
    }

    RemoverPrimeiro(){
        if (this.listaVazia()){
            console.log("Operação inválida.")
        }else{
            this.contador --;
            let aux = this.proximo;
            this.proximo = aux.proximo;
            return ('removido -> '+aux.nome + ' ' + aux.idade);
        }
    }
}

class pessoa{
    constructor(nome,idade){
        this.nome=nome,
        this.idade=idade,
        this.proximo=null
    }
}


let listaNova = new lista(0);
let pessoa1 = new pessoa('João', 21);
let pessoa2 = new pessoa('Pedro', 22);
let pessoa3 = new pessoa('Paulo',20);
listaNova.adicionarPrimeiro(pessoa1);
listaNova.adicionarPrimeiro(pessoa2);
listaNova.adicionarPosicao(pessoa3, 2);
listaNova.mostrarTudo();
console.log(listaNova.getCount());
console.log(listaNova.RemoverPrimeiro())
listaNova.mostrarTudo();