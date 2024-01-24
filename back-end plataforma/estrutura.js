pilha=[3,7,9,1,0];
fila=[3,7,9,1,0];
lista=[3,7,9,1,0];

// no caso de fila o primeiro a chegar, seria o primeiro a sair, assim removendo o 3
console.log(fila+"")
fila.shift();
console.log("Após a remoção:")
console.log(fila+"\n\n")

// no caso de pilha o ultimo a chegar, seria o primeiro a sair, assim removendo o 0
console.log(pilha+"")
pilha.pop();
console.log("Após a remoção:")
console.log(pilha+"\n\n")

// Já no caso de lista, eu posso criar alguma regra específica para a minha fila, a transformando em uma pilha ou fila
// mas a lista pode ser removida em qualquer lugar, adicionar em qualquer lugar