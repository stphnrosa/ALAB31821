const express=require("express");
const app=express();
const port=3000;

const logReq = function (req,res,next) {
    console.log("Request Received");
    next();
};

app.use(logReq);

app.set("view engine", "pug"); // specify where view templates exist and registering the view engine


// Get routes
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

app.get("/user", (req, res) => {
    res.send("Received a GET request for user!");
});

app.get("/user/:userID", (req, res) => {
    res.send(`Navigated to the user page for: ${req.params.userID}.`);
});













app.listen(port,() => {
    console.log(`anything: ${port}`);
}
);