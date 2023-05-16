let express = require("express");
const mongoose = require("mongoose");
const userrouter =require('./router/router')
let app = express();

mongoose.connect("mongodb://localhost:27017/loginform",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((res)=>{
    console.log("database connected successfully")
})
.catch((err)=>{
    console.log(err)
})

//router

app.use("/user",userrouter)

app.get("/test", (req,res)=>{
    res.send("Hello world")
})
app.use(express.static('ippopaytask'))
app.listen(3000,()=>{
    console.log("Node Server is running on Localhost:3000")
})