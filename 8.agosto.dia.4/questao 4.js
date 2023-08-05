const tarantinoMovies= [
    {name :'Bastardos Inglórios', release: 2009},
    {name :'Pulp Fiction', release: 1994},
    {name :'Kill Bill: Volume 2', release: 2004},
    {name :'Quatro Quartos', release: 1995},
    {name :'Sin City', release: 2005},
    {name :'Era uma vez em... Hollywood', release: 2019},
    {name :'Django Livre', release: 2012},
    {name :'Cães de Aluguel', release: 1992},
    {name :'À Prova de Morte', release: 2007},
    {name :'Kill Bill: Volume 1', release: 2003}
]
const antigos = tarantinoMovies.filter(retornaFilme=>{
    return retornaFilme.release<=2000})

console.log(antigos)