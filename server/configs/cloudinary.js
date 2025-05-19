import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name: procee.env.CLOUDINARY.NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
       api_secret: process.env.CLOUDINARY_NAME,
    })
}