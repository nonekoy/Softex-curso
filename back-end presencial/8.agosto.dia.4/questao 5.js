const empresas=[
    {nome:"Samsung", valorDeMercado:50, CEO:"Kim Hyun Suk",anoDeCriação:1938},
    {nome:"Microsoft", valorDeMercado:415, CEO:"Satya Nadella",anoDeCriação:1975},
    {nome:"Intel", valorDeMercado:117, CEO:"Brian Krzanich", anoDeCriação:1968},
    {nome:"Facebook", valorDeMercado:383, CEO:"Mark Zuckerberg", anoDeCriação:2004},
    {nome:"Spotify", valorDeMercado:30, CEO:"Daniel Ek", anoDeCriação:2006},
    {nome:"Apple", valorDeMercado:845, CEO:"Tim Cook", anoDeCriação:1976}
]

const Novas = empresas.filter(novo=>{
    return novo.anoDeCriação>=2000

})

console.log("Todas as empresas criadas:")
empresas.forEach(element => {
    console.log("nome :"+element.nome+ ", com seu CEO: "+element.CEO)
});
console.log("\nsomente empresas dos anos 2000:")
Novas.forEach(element => {
    console.log("nome :"+element.nome+ ", com seu CEO: "+element.CEO)
});

const valores= empresas.reduce((valorTotal,valor)=>valorTotal+valor.valorDeMercado,0)
console.log("\nO valor total de todas as empresas juntos é: "+valores)