const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akshay-011:akshay@cluster0.bq660w4.mongodb.net/superMan?retryWrites=true&w=majority");

let Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:String,
    grade:Number
});

const studModel = mongoose.model("student Model", studentSchema);

module.exports = studModel;