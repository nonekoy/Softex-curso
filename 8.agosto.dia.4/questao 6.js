let pedidos =[
    {id :420, 'nome':"Denner", 'alimento':"Sandubão de Bacon", 'bebida':"Suco de Limão"},
    {id :152, 'nome':"Naiady", 'alimento':"Sandubão Vegano", 'bebida':"Suco de Laranja"},
    {id :29, 'nome':"Marcio", 'alimento':"Coxinha", 'bebida':"Suco de Uva"},
    {id :33, 'nome':"Isabel", 'alimento':"Sandubão de Picanha", 'bebida':"Refrigerante"},
    {id :55, 'nome':"José", 'alimento':"Pizza", 'bebida':"Refrigerante"},
]

const achei = pedidos.find(retorne=>{
    return retorne.id==33})

console.log(achei)