const zod = require("zod");

const signinSchema = zod.object({
    identifier : zod.string(),
    password : zod.string()
});

function signinValidator (req, res, next)
{
    try
    {
        const identifier = req.body.identifier;
        const password = req.body.password;

        const result = signinSchema.safeParse({identifier, password});

        if (!result.success)
        {
            if (req.body.token)
            {
                next();
                return;
            }
            else
            {
                return res.json({message : "Invalid inputs"});
            }
        }

        next();
    }
    catch (error)
    {
        console.log("Error while validating signin input", error);
        return res.json({message : "Some error occurred"});
    }
}

module.exports = signinValidator;