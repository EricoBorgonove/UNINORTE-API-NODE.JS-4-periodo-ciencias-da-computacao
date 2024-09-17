const express = require ('express')
const path = require ('path')
const app = express ()
app.use (express.static('public'))
app.get ('/', (req, res) => {
    res.send('Bem Vindo Feriado, seu Lindo')
})
app.get ('/arquivo', (req, res) =>{
    res.sendFile(path.resolve('./public/arquivo.html'))
})
app.get ('/12', (req, res) => {
    res.status(202).send('Rota 12')
})
app.use((req, res, next) =>{
    res.status(404).send('Rota não encontrada')
})

app.listen (3000, ()=>{
    console.log (`Servidor Rodando na porta 3000`)
})
