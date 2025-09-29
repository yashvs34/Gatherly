const zod = require("zod");

const signupSchema = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    userName : zod.string(),
    email : zod.string().email(),
    password : zod.string()
});

function signupValidator (req, res, next)
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

        next();
    }
    catch (error)
    {
        console.log("Error while validating signup input", error);
        return res.json({message : "Some error occurred"});
    }
}

module.exports = signupValidator;