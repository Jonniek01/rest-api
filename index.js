import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'
import loginRoute from './routes/login.js'

const app = express()
const PORT = 3001;

app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("USERS APP")
})

app.use('/login',loginRoute)

app.use('/users', userRoutes);

app.get('*',(req,res)=>{
    res.status(404).send({
        status:404,
        success:false,
        message:"RESOURCE NOT FOUND",
        data:[]
    })
})


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
