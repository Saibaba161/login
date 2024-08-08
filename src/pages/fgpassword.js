import { useState } from "react";
import { toast } from "react-toastify";

const FGPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)

        toast.success('An email has been sent to reset your password')
    }

    return (
        <div className="password-screen">
        <div className="hero-image">
        </div>
        <form className="password-form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <button className="submit" type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default FGPassword