import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
//let meuAvatar=''
const login=[]
let tweets=[
	
]


app.post('/sign-up', (req,res) =>{
    const {username, avatar} = req.body;
    const loginPost={username,avatar};
    

    /*if(!username || !avatar){
        alert(res.status(401).send('O envio dos dados são obrigatórios'))
        return
    }*/
    
    login.push(loginPost)
    //meuAvatar = login[0].avatar
    res.status(200).send('Ok')
})

app.get('/tweets', (req,res) =>{
    

    res.status(200).send(tweets)

})

app.post('/tweets', (req,res) =>{
    
    
    const {username, tweet} = req.body
    const user = login.find( item => item.username === username)
   
    if(!user){
        res.status(401).send('UNAUTHORIZED')
        return
    
    }
   
    const dados ={
        username,
        tweet,
        avatar:user.avatar
        };
  
    
    
    if(tweets.length < 11){
        tweets.splice(-tweets.length,0,dados)
       
    }

    if(tweets.length > 10){
        
        const corte = tweets.pop()
        
        
    }

    res.send('ok')
    login = {};
    
    
    
    
})
app.listen(5000)