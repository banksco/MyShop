import mongoose from 'mongoose'

const connectDB = async () => {
    /* Connect to the database */
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
    
}

export default connectDB