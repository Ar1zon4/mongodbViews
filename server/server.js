const express = require('express')

const path = require('path')

const https = require('http')

const  addProductRoute = require('./routes/addProduct')

const bodyparser = require('body-parser')

const mongoose = require('mongoose')
// const mongodb = require('mongodb')
// const {mongoClient, mongoDb}= require('./database/db')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')

app.use(addProductRoute)


mongoose.connect(
    "mongodb+srv://godlytone:Bafoo2019@cluster0.i6zf2dj.mongodb.net/?retryWrites=true&w=majority"
).then(user=> {
    app.listen(4000);
     console.log(user.connection.host)
    })
// mongoDb(app.listen(4000))

