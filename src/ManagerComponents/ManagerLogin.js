import React, { useState } from 'react';
import '../Login.css';

export default function ManagerLogin({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [msgClass, setMsgClass] = useState("");

    //make an api call on login submit
    //set the retrieved token to app's state
    function handleSubmit(event) {
        event.preventDefault();
        setMsgClass("message");
        setMessage("logging in...");
        fetch(`http://localhost:5179/api/Authentication/managerLogin?Email=${email}&Password=${password}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => setToken(data))
            .catch(error => {
                setMessage("login failed");
                setMsgClass("error");
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Manager Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <span>email is saikumar@gmail.com</span>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <span>password is Inacl4ptp!</span>
                </label>
                <div>
                    <button type="submit">Submit</button>
                    <span className={msgClass}>{message}</span>
                </div>
            </form>
        </div>
    )
}