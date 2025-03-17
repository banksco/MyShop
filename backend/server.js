import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import errorrHandler from './middleware/errorMiddleware.js'


const app = express()
dotenv.config()
connectDB()

/* Product Routes API*/
app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

/* Error Handler */
app.use(errorrHandler)
app.listen(5000, console.log('Server is running on port 5000'))