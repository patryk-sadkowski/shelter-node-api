const dontenv = require('dotenv').config({
    path: './.env'
})

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const colors = require('colors')

// APP instance init
const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, console.log(`Database is ON`.green.inverse.bold))

// Middlewares
app.use(cors())
app.use(morgan('tiny'))



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`.yellow.bold.inverse)
})
