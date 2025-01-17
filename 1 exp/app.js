const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));



app.get('/',(req,res)=>{{
    res.send(`
        <html>
        <head>
            <title>Strona</title>
        </head>
        <body>
            <h1>Witaj</h1>
            <form method="post" action="/result">
             <input type="text" name="name" required/>
             <button type="submit">Wyslij</button>
            </form>
        </body>
        
        </html>`);
}});

app.post('/result',(req,res)=>{

    const name = req.body.name;
    res.send(`<h2>Witaj ${name}</h2>`)
})

app.get('/O-Mnie', (req,res)=>{
    res.send(`
        <html>
        <head>
            <title>Strona</title>
        </head>
        <body>
            <h1>Zopa</h1>
        </body>
        
        </html>`);
})

app.listen(port,()=>{
    console.log('test');
})