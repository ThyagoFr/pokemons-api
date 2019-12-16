// Importando bibliotecas uteis
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// Criando o App
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando conexao com Banco de Dados
mongoose.connect("mongodb://thyagofr:86337748a@ds353358.mlab.com:53358/pokemonapi",
{ useNewUrlParser:true,useUnifiedTopology:true
})

require("./models/Pokemon")

// Rotas
app.use("/api",require("./routes/routes"))
app.get("/",(req,res) =>{
    return res.send("index")
})

var port = process.env.PORT || 7000
app.listen(port,()=>{
    console.log("Rodando...")
})