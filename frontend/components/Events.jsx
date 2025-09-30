import { useEffect, useState } from "react";
import axios from "axios"
import Event from "./Event";

function Events ()
{
    const [result, setResult] = useState([]);

    useEffect(() => {
        const responseFunction = async () => {
            const response = await axios.get("http://localhost:8081/events");
            setResult(response.data);
        }

        responseFunction();
    }, []);

    return (
        <div className="events-container">
            {result.length > 0 ? result.map((element, index) => {
                return <Event key={index} element={element} />
            }) : <></>}
        </div>
    )
}

export default Events;