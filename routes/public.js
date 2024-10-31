const express = require ('express')
const router = express.Router()

const path = require ('path')
const UsersController = require('../controllers/UsersController')

router.use (express.static('public'))

router.get ('/', (req, res) => {
    res.send('Bem Vindo Feriado, seu Lindo')
})
router.get ('/arquivo', (req, res) =>{
    res.sendFile(path.resolve('./public/arquivo.html'))
})
router.get ('/12', (req, res) => {
    res.status(202).send('Rota 12')
})
router.post('/usuarios',UsersController.create)
router.get('/usuarios', UsersController.showAll)
router.get('/usuarios/:id', UsersController.showOne)
router.put('/usuarios/:id', UsersController.update)
router.delete('/usuarios/:id', UsersController.delete)

router.use((req, res, next) =>{
    res.status(404).send('Rota não encontrada')
})

module.exports = router