const dontenv = require('dotenv').config({
    path: './.env'
})

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const colors = require('colors')
const { notFound, errorHandler } = require('./middlewares/error.middlewares')


// Routes imports
const catsRoutes = require('./routes/animals.routes')
const uploadsRoutes = require('./routes/uploads.routes')

// APP instance init
const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, console.log(`Database is ON`.green.inverse.bold))

app.use(fileUpload({
    limits: { fileSize: 1024 * 1024 * 5 }
}))

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/public', express.static(`${__dirname}/public`))

// Routes INIT
app.use('/api/v1/animals', catsRoutes)
app.use('/api/v1/uploads', uploadsRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`.yellow.bold.inverse)
})
