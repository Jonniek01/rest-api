
const express = require("express");
const cors = require('cors');
require('dotenv').config()
const  {router} = require('./routes/users.js')
require('dotenv').config()

const app = express()


app.use(express.json())
app.use(cors());
const PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send("USERS APP")
})
app.use(function(err, req, res, next){
    console.log("global err:",err)

    res.status(500).send({message:"something went wrong"})
})

const use = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);


app.use('/users', use(router));



app.get('*',(req,res)=>{
    res.status(404).send({
        status:404,
        success:false,
        message:"RESOURCE NOT FOUND",
        data:[]
    })
})


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
