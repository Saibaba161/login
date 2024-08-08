import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className="login-screen">
            <div className="hero-image">
            </div>
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            <button className='submit' type='submit'>Signup</button>

            <div className="login-options">
                <a href="/">Already Signed Up? Login</a>
            </div>
        </form>
        </div>
    )
}

export default Signup