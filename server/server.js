import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectDB from './configs/mongodb.js'


//Initialize Express
const app = express()

// Connect to db
await connectDB()

//Middleware
app.use(cors())


//Route 
app.get('/',(req,res)=> res.send("App Working"))

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})