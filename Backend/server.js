const express  = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./src/routes/route')
const PORT = 3000
const URI = "mongodb+srv://richardwork:2YLjcp0favzUASR9@cluster3.bli4t.mongodb.net/urlGroup34?retryWrites=true&w=majority"



app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(URI)
.then(()=>console.log('Mongodb Connected....'))
.catch(err=>console.log(err))

app.use('/',route)

app.use((req,res)=>res.status(400).send({status:false,message:'invalid Url'}))

app.listen(PORT,()=>console.log(`Server listing on ${PORT}`))




