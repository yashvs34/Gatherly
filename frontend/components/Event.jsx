
function Event ({element})
{
    return (
        <div>
            <div>{element.eventName}</div>
            <div>Time : {element.eventTime}</div>
            <div>Venue : {element.venue}</div>
            <div>{element.description}</div>
            <div>Posted By : @{element.postedBy}</div>
        </div>
    )
}

export default Event