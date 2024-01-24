nomes=['joão','Lucas','Pedro','Gabriel',"Ricardo",'Gustavo',"Felipe",'Emanoel','Maria','Vinícius'];
idades=[12,14,18,18,18,20,31,25,24,22];
cores=['Azul','Laranja','Verde','Azul','Preto',"Amarelo",'Marrom','Verde','Rosa','Verde'];

console.log(nomes);
console.log(idades);
console.log(cores);

idades.splice(2,2,19,19);
cores.splice(8,2,"Amarelo","Azul")

console.log(nomes);
console.log(idades);
console.log(cores);