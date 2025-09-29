const Event = require('../models/events');

async function getEvents()
{
    try 
    {
        return await Event.find({});
    }
    catch (error)
    {
        console.log("Error while getting events", error);
    }
}

async function findEvent(event)
{
    try
    {
        return await findOne({event});
    }
    catch (error)
    {
        console.log("Error while finding events", error);
    }
}

async function saveEvent ({hostedBy, eventName, eventTime, venue, description})
{
    try
    {
        const newEvent = new Event({hostedBy, eventName, eventTime, venue, description});

        return await newEvent.save();
    }
    catch (error)
    {
        console.log("Error while saving event", error);
    }
}

module.exports = {getEvents, findEvent, saveEvent};