const express = require('express')
const { user } = require('pg/lib/defaults')
const userController = require('./user.controller')
const userRouter = express.Router()

//index page
userRouter.get('/', (req, res) => {
    res.send('hi from index')
})

//register page
userRouter.post('/user/registration', userController.createUser)
// userRouter.post('/user/registration', (req,res) => {
//     res.send('hi')
// })

module.exports = userRouter;