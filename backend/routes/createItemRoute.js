const express = require("express");
const { saveItem } = require("../repository/itemsRepository");
const itemValidator = require("../middlewares/itemValidator");
const { findEvent } = require("../repository/eventsRepository");
const router = express.Router();

router.post('/item', itemValidator, async (req, res) => {
    try
    {
        const itemName = req.body.itemName;
        const foundEvent = req.body.foundEvent;
        const foundVenue = req.body.foundVenue;
        const contact = req.body.contact;

        const event = findEvent(foundEvent);

        // if mentioned event is not found
        if (!event)
        {
            return res.json({message : "No such event found"});
        }

        await saveItem({itemName, foundEvent, foundVenue, contact});

        return res.json({message : "Item created successfully"});
    }
    catch (error)
    {
        console.log("Error while creating item", error);
        return res.json({message : "Some error occurred"});
    }
});

module.exports = router;