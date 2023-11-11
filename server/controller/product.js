const mongoDb =require('mongodb')
const {User} = require('../model/user')

exports.addVibes=(req,res)=>{
    res.render('addProduct')
}

exports.addProduct=  (req,res)=>{
    const {name,description,price}=req.body
    try {
         User.create({name,description,price})
         res.redirect('/displayProducts')


        
    } catch (error) {
        console.log(error)
        
    }
   
}

exports.displayPage=(req,res)=>{
try {
    User.find()
    .then((user)=> res.render('displayProducts', {user}))
} catch (error) {
    console.log(error)
    
}
}


exports.updatePerson=(req,res)=>{
   const {name , description,id, price} = req.body
  try {
    User.findByIdAndUpdate(id,{name, description,price})
    .then((user)=> res.redirect('update'))

    
  } catch (error) {
    console.log(error)
    
  }    
}

exports.updateConfirm=(req,res)=>{
const {id} =req.params

try {
    User.findById({_id:id})
.then((user)=> res.render('updatelist/update', {user}))
    
} catch (error) {
    console.log(error.message)
    
}

    

}

exports.runDelete=(req,res)=>{
    const {id} =req.params
    try {
        User.findByIdAndDelete({_id:id})
        .then((user)=> res.redirect('update'))
    } catch (error) {
        console.log(error.message)
        
    }
}