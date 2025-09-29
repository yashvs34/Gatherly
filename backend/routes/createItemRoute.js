const express = require("express");
const { saveItem } = require("../repository/itemsRepository");
const itemValidator = require("../middlewares/itemValidator");
const router = express.Router();

router.post('/item', itemValidator, async (req, res) => {
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