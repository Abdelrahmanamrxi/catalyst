const express=require('express')
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const products=require('./routes/product_routes')
const ErrorHandler=require('./middleware/error_middleware')
const notFound=require('./middleware/notfound')
const connectDB=require('./db/connect')
const users=require('./routes/user_routes')

const app=express()
const port=process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))

app.use('/api/products',products)
app.use('/api/users',users)


app.use('*',notFound)
app.use(ErrorHandler)
async function StartServer(){
    try{
        await connectDB(process.env.MONGOURI)
        console.log('Connected to DB')
        app.listen(port,()=>{
        console.log(`Server is Listening on Port ${port}`)
     })
    }
    catch(err){
        console.log(err)
    }
}
StartServer()