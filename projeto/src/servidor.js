const porta = 3003

const express = require('express')
const bodyParse = require('body-parser')
const app = express()
const bancoDeDados = require('./BancoDeDados')

app.use(bodyParse.urlencoded({extended: true}))

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProduto()) //converter para JSON
})

app.get('/produtos/:id',(req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.parans.id))
})

app.put('/produtos', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto ({
    nome: req.body.nome,
    preco: req.body.preco
    })
    res.send(produto) //json
})

app.put('/produtos/:id', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto ({
    id: req.parans.id,    
    nome: req.body.nome,
    preco: req.body.preco
    })
    res.send(produto) //json
})

app.delete('/produtos', (req, res, next)=> {
    const produto = bancoDeDados.excluirProduto(req.parans.id)
        res.send(produto) //json
    })
    


app.listen(porta, () => {
    console.log(`servidor execurando na porta ${porta}.`)
})
