const express = require("express");
const router = express.Router();

router.get('/events', async (req, res) => {
    try
    {
        const allEvents = await getEvents();
    
        return res.json(allEvents);
    }
    catch (error)
    {
        console.log("Error while fetching events", error);
        return res.json({message : "Some error occurred"});
    }
});

module.exports = router;