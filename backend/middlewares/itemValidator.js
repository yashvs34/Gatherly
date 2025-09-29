const zod = require("zod");

const itemSchema = zod.object({
    itemName : zod.string(),
    foundEvent : zod.string(),
    foundVenue : zod.date(),
    contact : zod.venue(),
    isFound : zod.boolean()
});

function itemValidator ()
{
    try
    {
        const itemName = req.body.itemName;
        const foundEvent = req.body.foundEvent;
        const foundVenue = req.body.foundVenue;
        const contact = req.body.contact;
        const isFound = req.body.isFound;

        const result = itemSchema.safeParse({itemName, foundEvent, foundVenue, contact, isFound});

        if (!result.success)
        {
            return res.json({message : "Invalid inputs"});
        }

        next();
    }
    catch (error)
    {
        console.log("Error while validating item input", error);
        return res.json({message : "Some error occurred"});
    }
}

module.exports = itemValidator;