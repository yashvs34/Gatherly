const Item = require("../models/items");

async function getItems ()
{
    try 
    {
        return await Item.find({});
    }
    catch (error)
    {
        console.log("Error while getting items", error);
    }
}

async function saveItem ({itemName, foundEvent, foundVenue, contact})
{
    try
    {
        const newItem = new Item({itemName, foundEvent, foundVenue, contact});

        return await newItem.save();
    }
    catch (error)
    {
        console.log("Error while saving items", error);
    }
}

module.exports = {getItems, saveItem};