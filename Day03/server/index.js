const express = require("express");
const studModel = require("./model");
const cors = require("cors");

const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.post("/create", (req, res) => {
    var doc = new studModel(req.body);  
    doc.save();
    res.send("Data added to the database")
});

app.get("/view", async(req,res) => {
    var data = await studModel.find()
    res.json(data)
});

app.delete("/delete/:id", async (req,res) => {
    var id = req.params.id;
    await studModel.findByIdAndDelete(id);
    res.send("Deleted ")

});

app.put("/update/:id", async (req, res) => {
    await studModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Update successfully");
})

app.post("/deletes", async (req,res) => {
    await studModel.findByIdAndDelete(req.body.id);
    res.send("deleted..")
})

app.listen(9876, () => {console.log("[*] server started...")})