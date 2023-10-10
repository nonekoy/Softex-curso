const express = require("express");
const mysql2 = require("mysql2");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql2.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"empresa"
})

db.connect((error)=>{
    if(error){
        console.log("erro",error);
    }else{
        console.log("conexão bem sucedida.")
    }
})

app.get("/formulario",(req,res)=>{
    res.render("formulario")
})

app.post("/cadastrar",(req,res)=>{
    const {nome,preco}=req.body;
    const query = 'insert into produto (nome,preco) values (?,?)'

    db.query(query,[nome,preco],(err)=>{
        if(err){
            console.log('erro ao inserir no banco de dados.',err);
        }else{
            res.send("usuário cadastrado com sucesso.")
        }
    })
})

app.get("/",(req,res)=>{
    res.send("rota principal");
})

app.listen(3303,()=>{
    console.log("servidor online.");
})

