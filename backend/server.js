import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import errorrHandler from './middleware/errorMiddleware.js'


const app = express()
dotenv.config()
connectDB()

/* Product Routes API*/
app.use('/api/products', productRoutes)

/* Error Handler */
app.use(errorrHandler)
app.listen(5000, console.log('Server is running on port 5000'))