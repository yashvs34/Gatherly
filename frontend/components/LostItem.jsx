
function LostItem ({element})
{
    return (
        <div>
            <div>{element.itemName}</div>
            <div>{element.foundEvent}</div>
            <div>{element.foundVenue}</div>
            <div>Contact : {element.contact}</div>
        </div>
    )
}

export default LostItem;