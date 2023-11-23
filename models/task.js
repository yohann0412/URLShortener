const mongoose = require("mongoose")

const mySchema = new mongoose.Schema({
    oldUrl: {
        type:String,
        required:[true, "URL cannot be empty"],
        minlength:[1, "Minimum length must be 1"],
        trim:true,
    },
    newUrl: String,

})

module.exports = mongoose.model("urlDoc", mySchema)