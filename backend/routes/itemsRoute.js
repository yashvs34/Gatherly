const express = require("express");
const router = express.Router();

router.get('/items', async (req, res) => {
    try
    {
        const allItems = await getItems();

        return res.json(allItems);
    }
    catch (error)
    {
        console.log("Error while fetching items", error);
        return res.json({message : "Some error occurred"});
    }
});

module.exports = router;