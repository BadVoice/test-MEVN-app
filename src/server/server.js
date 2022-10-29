
const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const http = require('http')

// Set up a connection to the database
mongoose.connect(
    'mongodb://localhost:27017/mevnshop',{
    
    }
)

// init app 
const app = express()  // middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Declare Routes
const PORT = 3000
http.createServer({}, app).listen(3000)
console.log(`Server running at ${PORT}`)


