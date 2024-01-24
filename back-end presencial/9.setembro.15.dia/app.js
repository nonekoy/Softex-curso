const express = require("express");
const app = express();

app.use(express.json());

Carros = [
    {id: 1,
    modelo: "Palio",
    valor: "35000",
    ano: 2010
    },
    {id: 2,
    modelo: "Fiat",
    valor: "30000",
    ano: 2005
    },
    {id: 3,
    modelo: "Gol",
    valor: "48000",
    ano: 2020
    }
    ]

app.listen (3001, ()=>{
    console.log("servidor conectado.")
});

app.get("/",(req,res)=>{
    console.log("olá")
})

app.post ("/cadastrar",(req,res)=>{
    let dados= req.body;
    Carros.push(dados); 
});

app.get ("/carros",(req,res)=>{
    let msg = ''
    Carros.forEach(element => {
        msg+=("Id: " + element.id +",  Modelo: " + element.modelo +",   Ano: " + element.ano + ",   Valor: " + element.valor + "<br>");
    });
    res.send(msg);
})

app.delete("/delete/:id",(req,res)=>{
    let deletar = req.body;
    Carros.splice(deletar-1,1);
})

