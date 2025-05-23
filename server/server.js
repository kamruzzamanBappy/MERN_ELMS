import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectCloudinary from './configs/cloudinary.js'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'


//Initialize Express
const app = express()

// Connect to db
await connectDB()
await connectCloudinary()

//Middleware
app.use(cors())
app.use(clerkMiddleware())


//Route 
app.get('/',(req,res)=> res.send("App Working"))
app.post('/clerk', express.json(),clerkWebhooks)
app.use('/api/educator', express.json(),educatorRouter)
//Port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})