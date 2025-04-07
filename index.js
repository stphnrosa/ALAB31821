
const express=require("express");
const pug = require('pug');

const app=express();
const port=3000;


app.set("view engine", "pug"); // specify where view templates exist and registering the view engine

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');





app.use(express.static("./styles"));

// Render a set of data
console.log(compiledFunction({
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  name: 'Forbes'
}));



app.listen(port,() => {
    console.log(`anything: ${port}`);
});