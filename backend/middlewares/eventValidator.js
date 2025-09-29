const zod = require("zod");

const eventSchema = zod.object({
    postedBy : zod.string(),
    eventName : zod.string(),
    eventTime : zod.string().datetime({offset: true}),
    venue : zod.string(),
    description : zod.string()
});

function eventValidator (req, res, next)
{
    try
    {
        const postedBy = req.body.postedBy;
        const eventName = req.body.eventName;
        const eventTime = req.body.eventTime;
        const venue = req.body.venue;
        const description = req.body.description;

        const result = eventSchema.safeParse({postedBy, eventName, eventTime, venue, description});
        console.log(result);

        if (!result.success)
        {
            return res.json({message : "Invalid inputs"});
        }

        next();
    }
    catch (error)
    {
        console.log("Error while validating event input", error);
        return res.json({message : "Some error occurred"});
    }
}

module.exports = eventValidator;