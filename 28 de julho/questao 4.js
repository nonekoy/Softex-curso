cachorro = {
    raça : "labrador",
    cor : "preto",
    idade: 10,
    latir : function(latiu){
        if (latiu){
            console.log("AUAUAUAUAUAUAU")
        }else{
            console.log("cri cri cri")
        }
    }
}

cachorro.latir(true);