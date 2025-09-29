const User = require("../models/users");

async function findUser (identifier)
{
    try
    {
        return await User.findOne({
            $or : [
                {email : identifier},
                {userName : identifier}
            ]
        });
    }
    catch (error)
    {
        console.log("Error in finding user", error);
    }
}

async function saveUser ({firstName, lastName, userName, email, password})
{
    try
    {
        const newUser = new User({firstName, lastName, userName, email, password});

        return await newUser.save();
    }
    catch (error)
    {
        console.log("Error while saving user", error);
    }
}

module.exports = {findUser, saveUser};