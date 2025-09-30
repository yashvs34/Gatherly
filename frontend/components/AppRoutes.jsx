import { Route, Routes } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import Dashboard from "./Dashboard"
import Events from "./Events"
import LostItems from "./LostItems"

function AppRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<LoginComponent/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/lostItems" element={<LostItems/>}/>
        </Routes>
    )
}

export default AppRoutes