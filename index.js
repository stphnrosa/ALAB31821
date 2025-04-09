//reference: https://expressjs.com/en/guide/using-template-engines.html
//reference: https://betterstack.com/community/guides/scaling-nodejs/build-nodejs-application-express-pug/


const express = require("express");
const pug = require("pug");
const app = express();
const port = 3000;

//middleware- has accesss to request/response objects 
app.use(express.static(".styles")); // must use in order to load middleware function

app.set("view engine","pug");

//Routes
app.get("/", (req, res) => {
    res.send("This is the homepage!");
});

const server= app.listen(process.env.PORT || 3000, () => {
    console.log(`Server: ${server.address().port}`);
});



app.get("/about", (req, res) => {
    res.send("about");
});

app.listen(port,() => { 

console.log(`Server listening on port:  ${port}`);
});
