const userController = require('../controller/product')

const router = require('express').Router()

router.post('/home', userController.addProduct)

router.get('/addproduct', userController.addVibes)

router.get('/display',userController.displayPage)

router.post('/update', userController.updatePerson)

router.get('/update/:id', userController.updateConfirm)

router.get('/delete/:id', userController.runDelete)






module.exports=router