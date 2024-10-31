const {users} = require ('../models')
//const users = require('../models/users')
require('dotenv').config()

module.exports = class UsersController{
    static async showAll(req, res){
        const usuarios = await users.findAll()
        res.send(usuarios)
    }
    static async showOne(req, res){
        const user = await users.findByPk(req.params.id)
        res.send(user)
    }
    static async create(req, res){
        const user = await users.create({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password
        })
        res.send(user)
    }
    static async delete(req, res){
        const user = await users.findByPk(req.params.id)
        await user.destroy()
        res.send(true)
    }
}