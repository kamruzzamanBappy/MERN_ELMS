import mongoose from "mongoose";

//Connect to the Mongodb database
const connectDB = async ()=>{
mongoose.connection.on('connected',()=>console.log('Database is Connected'))

await mongoose.connect(`${process.env.MONGODB_URI}/mern_elms`)
}

export default connectDB