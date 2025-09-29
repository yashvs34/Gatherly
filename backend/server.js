const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./configs/mongoDBConnection");
const cors = require("cors");
const signupRoute = require("./routes/signupRoute");
const signinRoute = require("./routes/signinRoute");
const itemsRoute = require("./routes/itemsRoute");
const createItemRoute = require("./routes/createItemRoute");
const eventsRoute = require("./routes/eventsRoute");
const createEventRoute = require("./routes/createEventRoute");

app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.json({message : "Welcome to gatherly"});
});

app.use('/', signupRoute);
app.use('/', signinRoute);
app.use('/', itemsRoute);
app.use('/', createItemRoute);
app.use('/', eventsRoute);
app.use('/', createEventRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});