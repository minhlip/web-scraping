import mongoose from 'mongoose'
import 'dotenv/config'


let isConnected = false

export const connectDB = async(): Promise<void> => {
  mongoose.set('strictQuery', true)

  if(!process.env.MONGODB_URL) return console.log('MONGODB URL is not defined')

   if(isConnected) return console.log('=> using existing database') 

    try {
      await mongoose.connect(process.env.MONGODB_URL)
      isConnected = true
      console.log('MongoDB connected')
    } catch(error: any){
      console.log(error)
    }

  }