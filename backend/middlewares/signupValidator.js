const zod = require("zod");
const { findUser } = require("../repository/userRepository");

const signupSchema = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    userName : zod.string(),
    email : zod.string().email(),
    password : zod.string()
});

async function signupValidator (req, res, next)
{
    try
    {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const userName = req.body.userName;
        const email = req.body.email;
        const password = req.body.password;

        const result = signupSchema.safeParse({firstName, lastName, userName, email, password});

        if (!result.success)
        {
            return res.json({message : "Invalid inputs"});
        }

        // find if userName or email is already taken
        const user1 = await findUser(email);
        const user2 = await findUser(userName);

        if (!user1 || !user2)
        {
            next();
        }
        else if (user1)
        {
            return res.json({message : "Email already taken"});
        }

        return res.json({message : "UserName already taken"});
    }
    catch (error)
    {
        console.log("Error while validating signup input", error);
        return res.json({message : "Some error occurred"});
    }
}

module.exports = signupValidator;