require('dotenv').config()
const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;
require("./Database/connection");
const route = require("./routes/route")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(route)


app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))
