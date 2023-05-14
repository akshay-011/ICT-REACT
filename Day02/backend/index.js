const express = require("express");

const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) => {
    res.json("Home Page");
})
app.get("/name", (req,res ) => {
    res.json("Orewa ")
})

app.post("/signup", (req,res) => {
    res.send(`Name is ${req.body.name}`);           
})


app.listen(5000, () => console.log("[*] Server running at 5000"))