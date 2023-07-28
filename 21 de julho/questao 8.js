function AreaTriangulo(base,altura){
    return ((base*altura)/2)
}

let base= Number(prompt("Digite a base:  "))
let altura= Number(prompt("Digite a altura:  "))
console.log(AreaTriangulo(base,altura))