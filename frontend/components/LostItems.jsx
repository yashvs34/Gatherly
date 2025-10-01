import { useEffect, useState } from "react";
import axios from "axios";
import LostItem from "./LostItem";

function LostItems ()
{
    const [result, setResult] = useState([]);

    useEffect(() => {
        const lostItemFunction = async () => {
            const response = await axios.get("http://localhost:8081/items");
            setResult(response.data);
        }

        lostItemFunction();
    }, []);

    return (
        <div className="lostitems-container">
            {result.length > 0 ? result.map((element, index) => {
                return <LostItem key={index} element={element} />
            }) : <></>}
        </div>
    )
}

export default LostItems;
;