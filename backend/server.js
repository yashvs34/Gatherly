const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./configs/mongoDBConnection");

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.json({message : "Welcome to repo"});
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});