import express from "express"
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())
const login=[]
app.post('/sign-up', (req,res) =>{
    const {username, avatar} = req.body;
    if(!username || !avatar){
        return res.status(401).send('O envio dos dados são obrigatórios')
    }
    loginPost={username,avatar};
    login.push(loginPost)
    res.status(200).send('Ok')
})

app.get('/tweets', (req,res) =>{
    
})
app.listen(5000)