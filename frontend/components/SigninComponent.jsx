import { useState } from "react";

function SigninComponent ()
{
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div>Signin</div>
            <div>Welcome back to your account!</div>
            <div><input type="text" placeholder="Enter email or username" /></div>
            <div><input type={clicked ? "text" : "password"} placeholder="Enter password" /></div>
            <div><input type="checkbox" checked={clicked} onChange={(e) => {
                setClicked(e.target.checked);
            }} /> Show password</div>
            <div>Login</div>
        </div>
    )
}

export default SigninComponent;