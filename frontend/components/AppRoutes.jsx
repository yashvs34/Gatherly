import { Route, Routes } from "react-router-dom"
import SigninComponent from "./SigninComponent"
import SignupComponent from "./SignupComponent"
import Dashboard from "./Dashboard"
import Events from "./Events"
import LostItems from "./LostItems"

function AppRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<SigninComponent/>}/>
            <Route path="/signup" element={<SignupComponent/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/lostItems" element={<LostItems/>}/>
        </Routes>
    )
}

export default AppRoutes