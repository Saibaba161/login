import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(email, password)
            toast.success('Sign up success. Please Login')
        }
        catch(error) {
            toast.error('Something is wrong')
        }
    }

    return (
        <div className="signup-screen">
            <div className="hero-image" />
        <form className="signup-form" onSubmit={handleSubmit}>
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

            <div className="signup-options">
                <a href="/">Already Signed Up? Login</a>
            </div>
        </form>
        </div>
    )
}

export default Signup