const express = require("express");
const jwt = require("jsonwebtoken");
const { comparePassword } = require("../service/passwordHashing");
const { findUser } = require("../repository/userRepository");
const signinValidator = require("../middlewares/signinValidator");
const router = express.Router();

router.post('/signin', signinValidator, async (req, res) => {
    try
    {
        // if user has send token
        if (req.body.token)
        {
            const token = req.body.token;

            const {email, password} = await jwt.verify(token, process.env.JWT_SECRET);

            const user = await findUser({email});

            // if no user with given email
            if (!user)
            {
                return res.json({message : "No user found"});
            }

            // if user found then check password
            const match = await comparePassword(password, user.password);

            // if password doesn't matches
            if (!match)
            {
                return res.json({message : "No user found"});
            }

            return res.json({message : "Signin successfull"});
        }

        // user can signin using both email id and username
        const identifier = req.body.identifier;
        const password = req.body.password;

        // find user in database
        const user = await findUser({identifier});

        // if user is not present in database
        if (!user)
        {
            return res.json({message : "No user found"});
        }

        // compare password
        const match = await comparePassword(hashedPassword, user.password);
        const email = user.email;

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
        return res.json({message : "Some error occurred"});
    }
});

module.exports = router;