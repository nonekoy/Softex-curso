let Cidades_do_Brasil=["Juazeiro","Petrolina","Recife","Aracajú","Fortaleza"];

console.log("Array de cidades do Brasil:")
for (let i=0; i<Cidades_do_Brasil.length;i++){
    console.log(Cidades_do_Brasil[i]);
}
Cidades_do_Brasil.push("Salvador")
console.log("\ncidade adicionada, nova lista:\n")
for (let i=0; i<Cidades_do_Brasil.length;i++){
    console.log(Cidades_do_Brasil[i]);
}