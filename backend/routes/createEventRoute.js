const express = require("express");
const { saveEvent } = require("../repository/eventsRepository");
const eventValidator = require("../middlewares/eventValidator");
const router = express.Router();

router.post('/event', eventValidator, async (req, res) => {
    try
    {
        const postedBy = req.body.postedBy;
        const eventName = req.body.eventName;
        const eventTime = req.body.eventTime;
        const venue = req.body.venue;
        const description = req.body.description;

        await saveEvent({postedBy, eventName, eventTime, venue, description});

        return res.json({message : "Event created successfully"});
    }
    catch (error)
    {
        console.log("Error while creating event", error);
        return res.json({message : "Some error occurred"});
    }
});

module.exports = router;