const express = require("express")

const app = express();

app.use(express.json());

app.listen (3001, ()=>{
    console.log("servidor conectado.")
})

app.get("/usuarios",(req,res)=>{//req(requisição) res(resposta)
    res.send("Rota de usuarios.");
})

app.post("/usuarios/a",(req,res)=>{
    const dados = req.body;
    console.log("nome : ",dados.nome);
    console.log("idade : ",dados.idade);
    console.log(typeof(dados.idade))
})