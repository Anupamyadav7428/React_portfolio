import { useState } from "react"

export default function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="border-b">
            <form action="#">
                <input type="te" id="username" />
                <input type="password" id="username" />
            </form>
        </div>
    );
}