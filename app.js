const express = require("express");
let app = express();
const fs = require('fs');
let yargs = require("yargs");
const hbs = require('hbs');
app.set('view engine', 'hbs');
//add helpers to hbs file
hbs.registerHelper('currentYear', ()=>{
    return new Date().getFullYear();
})

//partials - pieces of a page that can be reused 
hbs.registerPartials(`${__dirname}'views/partials`)

app.use((req, res,next)=>{
    let now = new Date().toString();
    let myLog = `${now}: ${req.method} - ${req.url} `;
    console.log(myLog);
    fs.appendFile('requests.log', myLog + '\n', (error) =>{
        console.log(error);
    });
    next();
})
app.get("/", (req,res) => {
    res.send(__dirname);
})
app.use(express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/node_modules/angular`))

app.get("/about", (req,res) =>{
    res.send("ABOUT");
})

app.get("/home", (req, res) =>{
    res.render("home.hbs", {
        name: "Jardain"
    })
})

app.listen(3000, () =>{
    console.log("your express app is being served on port 3000");
})