function sad(){
    console.log("Bye World")
}

function Somar(num1,num2){
    return console.log(num1+num2)
}

numeros= [2,4,6,8,10];

final = numeros.map(x=> x+1);
for (let i=0; i<numeros.length ;i++){
    console.log(final[i]);
}