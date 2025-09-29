const express = require("express");
const { saveItem } = require("../repository/itemsRepository");
const router = express.Router();

router.post('/item', async (req, res) => {
    try
    {
        const itemName = req.body.itemName;
        const foundEvent = req.body.foundEvent;
        const foundVenue = req.body.foundVenue;
        const contact = req.body.contact;

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