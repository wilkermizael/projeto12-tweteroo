import express from "express"
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())
let meuAvatar=''
const login=[]
const tweets=[
	
]


app.post('/sign-up', (req,res) =>{
    const {username, avatar} = req.body;
    const loginPost={username,avatar};
    /*if(!username || !avatar){
        return res.status(401).send('O envio dos dados são obrigatórios')
    }*/
    login.push(loginPost)
    meuAvatar = login[0].avatar
    res.status(200).send('Ok')
})

app.get('/tweets', (req,res) =>{
    
    res.status(200).send(tweets)
    
})

app.post('/tweets', (req,res) =>{
    const {username, tweet} = req.body
    let nome = username
    console.log(nome)
    if(!nome){
        return res.status(401).send('UNAUTHORIZED')
    }
    
    const dados= {
        username,
        tweet,
        avatar:meuAvatar
        }
    tweets.push(dados)
    //console.log(dados.length)
    res.send("ok")
})
app.listen(5000)