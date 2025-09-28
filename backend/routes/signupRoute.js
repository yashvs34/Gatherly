const express = require("express");
const router = express.Router();

router.post('/signup', async (req, res) => {
    try
    {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const userName = req.body.userName;
        const email = req.body.email;
        const temp = req.body.password;

        const user1 = await findUser({email});
        const user2 = await findUser({userName});

        // if email or username is already present
        if (user1)
        {
            return res.json({message : "User already present"});
        }
        else if (user2)
        {
            return res.json({message : "Username not available"});
        }

        const password = await hashPassword(temp);

        await saveUser({firstName, lastName, userName, email, password});

        return res.json({message : "User created successfully"});
    }
    catch (error)
    {
        console.log("Error while signing up", error);
        return res.json({message : "Some error occurred"});
    }
});

module.exports = router;