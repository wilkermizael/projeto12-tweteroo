import express from "express"
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())
let meuAvatar=''
const login=[];
const tweets=[
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
]


app.post('/sign-up', (req,res) =>{
    const {username, avatar} = req.body;
    const loginPost={username,avatar};
    if(!username || !avatar){
        return res.status(401).send('O envio dos dados são obrigatórios')
    }
    login.push(loginPost)
    meuAvatar = login[0].avatar
    res.status(200).send('Ok')
})

app.get('/tweets', (req,res) =>{
    
    res.status(200).send(tweets)
    
})

app.post('/tweets', (req,res) =>{
    
    if(!login){
        return res.status(401).send('UNAUTHORIZED')
    }
    const {username, tweet} = req.body
    const dados= {
        username,
        tweet,
        avatar:meuAvatar
        }
    tweets.push(dados)
    res.send("ok")
})
app.listen(5000)