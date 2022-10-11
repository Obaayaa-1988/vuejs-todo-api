const express = require("express")
const mongoose = require("mongoose")
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")
const path= require("path")
const helmet = require("helmet")
const dotenv = require("dotenv").config()
require("dotenv").config()
const cookieParser = require("cookie-parser")

const morgan = require("morgan")
const app = express();


const PORT = process.env.PORT || 7576

//middlewares
//localhost 8008 is coming from the frontend host vue
app.use(cors({
    credentials: true, //metedata we are passing along
    origin: "http://localhost:8080",
    methods: "GET, POST, OPTIONS, PUT, DELETE"
}))

//http headers
app.use(morgan("dev"))
app.use(helmet())//headers
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));


const mongoUrl = process.env.MongoURL;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology : true })
.then(result => {
    if(result)
    console.log("connected to api task-mongo: successful")
}).catch(err => {
    console.log(err)
})
app.use(taskRoutes)








app.listen(PORT, () => console.log(` my server running on port ${PORT} `));