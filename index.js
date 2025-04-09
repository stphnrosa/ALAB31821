const express = require("express");
const pug = require("pug");
const app = express();
const port = 3000;

//middleware- has accesss to request/response objects 
app.use(express.static("./styles")); // must use in order to load middleware function

//Routes
app.get("/", (req, res) => {
    res.send("Home");
});


app.get("/about", (req, res) => {
    res.send("about");
});

//app.listen

// console.log(`anything: ${port}`);
// });
//