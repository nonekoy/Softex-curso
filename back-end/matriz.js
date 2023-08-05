let matriz= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]
console.log("usando for e for")
for (let i=0;i<matriz.length;i++){
    for (let j=0;j<matriz[i].length;j++){
            console.log(matriz[i][j]);

    }
}

console.log("usando forEach");

matriz.forEach(fila=>{
    fila.forEach(elemento=>{
        console.log(elemento)
    })
})