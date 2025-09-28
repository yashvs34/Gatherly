const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/signin', async (req, res) => {
    try
    {
        // user can signin using both email id and username
        const identifier = req.body.identifier;
        const password = req.body.password;

        // find user in database
        const user = findUser({identifier});

        // if user is not present in database
        if (!user)
        {
            return res.json({message : "No user found"});
        }

        // compare password
        const match = await comparePassword(password, user.password);

        // if match not found, means wrong password
        if (!match)
        {
            return res.json({message : "Invalid password"});
        }

        // else send jwt token
        const token = jwt.sign({email, password}, process.env.JWT_SECRET);

        return res.json({
            message : "signed in",
            token : token
        });
    }
    catch (error)
    {
        console.log("Error while signing in", error);
        return res.json({message : "Some error occurred!"});
    }
});

module.exports = router;