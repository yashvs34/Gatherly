const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    postedBy : {
        type : String,
        required : true
    },
    eventName : {
        type : String,
        required : true
    },
    eventTime : {
        type : Date,
        required : true
    },
    venue : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Event', eventSchema);