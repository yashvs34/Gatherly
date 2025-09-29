const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    foundEvent : {
        type : String,
        required : true
    },
    foundVenue : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    isFound : {
        type : Boolean,
        required : true,
        default : false
    }
});

module.exports = mongoose.model('Item', itemSchema);