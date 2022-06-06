const { response } = require('express')
const express = require('express')
const app = express()
const PORT= 8000


const games ={
"horizon zero dawn":{
"release":"2017",
"platform":"ps4",
"genre":"action/adventure",
"developer":"guerilla games"
},
"god of war":{
    "release":"2018",
    "platform":"ps4",
    "genre":"action/adventure",
    "developer":"santa monica studio"
    },
    "horizon forbidden west":{
        "release":"2022",
        "platform":"ps4/ps5",
        "genre":"action/adventure",
        "developer":"santa monica studio"
        },
        "unknown":{
            "release":"unknown",
            "platform":"unknown",
            "genre":"unknown",
            "developer":"unknown"
            }
        
    
    }



app.get('/',(req,res)=>{// kind of like an event listener except its on get
    res.sendFile(__dirname + '/index.html') // dirname is the root so look in this current root directory and start from there until you find index.html file
})

app.get('/api/:name',(req,res)=>{
  
  const gameName = req.params.name.toLowerCase()// this grabs the param :name (eg horizon zero dawn)and then makes it lowercase
  if(games[gameName]){// if gameName is a property of games object
    res.json(games[gameName])// this responds with the games object in json format
  }else{
      res.json(games["unknown"])
  }



})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is running on ${PORT}`)
})