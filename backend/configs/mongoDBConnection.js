const mongoose = require("mongoose");

async function connectDB()
{
    try 
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongo DB");
    }
    catch (error)
    {
        console.log("Error connecting to MONGODB ", error);
    }
}

module.exports = connectDB