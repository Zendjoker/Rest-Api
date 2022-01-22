const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routesUrls = require("./routes/route.js")
const cors =require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS , () => console.log("Database connected"))


app.use(express.json())
app.use(cors())
app.use ("/api/user" , routesUrls)
app.listen(4000, () => console.log("server is up and running "))