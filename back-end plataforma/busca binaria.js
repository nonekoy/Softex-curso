array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]

function buscaBinaria(umVetor, item) {
    let prim = 0;
    let ult = umVetor.length - 1;
    let achou = false;
    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2);
        if (umVetor[meioLista] == item) {
            achou = true;
        }
        else {
            if (item < umVetor[meioLista]) {
                ult = meioLista - 1;
            }
            else {
                prim = meioLista + 1;
            }
        }
    }
    return achou;
}
array.sort()
console.log(array)
console.log(buscaBinaria(array,20));