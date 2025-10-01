import { useState } from "react";

function SignupComponent ()
{
    const [clicked, setClicked] = useState(false);
    
    return (
        <div>
            <div>Signup</div>
            <div>Create your account to get started!</div>
            <div><input type="text" placeholder="Enter email" /></div>
            <div><input type="text" placeholder="Enter your firstname" /></div>
            <div><input type="text" placeholder="Enter your lastname" /></div>
            <div><input type="text" placeholder="choose a username" /></div>
            <div><input type={clicked ? "text" : "password"} placeholder="Enter password" /></div>
            <div><input type="checkbox" checked={clicked} onChange={(e) => {
                setClicked(e.target.checked);
            }} /> Show password</div>
            <div>Signup</div>
        </div>
    )
}

export default SignupComponent;