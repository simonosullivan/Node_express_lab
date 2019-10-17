const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) =>{
    res.sendfile(path.join(__dirname+'/index.html'))
})
app.get('/data', (req, res) =>{
    res.send('Welcome to data representation and querying')
})
app.get('/hello/:name', (req, res) =>{
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)
})

app.get('/movies/api', (req, res) =>{
    const myMovies =[ { 
        "Title":"Avengers: Infinity War", 
        "Year":"2018", 
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" 
    },
     { 
         "Title":"Captain America: Civil War", 
         "Year":"2016", 
         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
         }
        ];

    res.status(200).json({movies: myMovies })
   
})

app.get('/name', (req, res) =>{
    console.log(req.query.lastname)
    res.send('welcome '+req.query.firstname+' '+req.query.lastname)
})

app.post('/name', (req,res)=>{
    res.send('Post received from '+req.body.firstname+' '+req.body.lastname)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))