import { useState } from 'react';

function LoginPage({ setUser }) {
    const [username, setUsername] = useState("");
    
    const _handleChange = (event) => {
        setUsername(event.target.value);
    };
    
    const _handleSubmit = (event) => {
        event.preventDefault();
        setUser(username);
    }

    return (
        <main>
            <h1>Log In</h1>
            <form onSubmit={_handleSubmit}> 
                <label>Username:
                <input value={username} onChange={_handleChange} required />
                </label>
                <button type="submit">Log in</button>
            </form>
        </main>
    );
};

export default LoginPage;