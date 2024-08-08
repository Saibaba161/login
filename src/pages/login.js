import { useState } from "react";
import { toast } from "react-toastify";

import google from '../assets/google.svg';
import instaicon from '../assets/instaicon.svg'
import facebook from '../assets/facebook.svg'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(email, password)
            toast.success('Login Succesful')
        }
        catch(error) {
            toast.error('Invalid Credentials')
        }
    }

    const handleSocial = (link) => {
        switch(link) {
            case 'google':
                window.open('https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Blogin%2Burl%26sca_esv%3D32e484f6156eb8e3%26sxsrf%3DADLYWIIaNOjcb6EmocklUI1_xCKWywEmDg%253A1723123642447%26ei%3Duse0ZtP2GtaZ4-EPnuqwkAU%26ved%3D0ahUKEwjTu_Lkv-WHAxXWzDgGHR41DFIQ4dUDCBA%26uact%3D5%26oq%3Dgoogle%2Blogin%2Burl%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiEGdvb2dsZSBsb2dpbiB1cmwyCxAAGIAEGJECGIoFMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSMIQUI0DWMEOcAF4AJABAJgBhQGgAeMEqgEDMC41uAEDyAEA-AEBmAIFoAKCBMICChAAGLADGNYEGEfCAhMQLhiABBiwAxjRAxhDGMcBGIoFwgINEAAYgAQYsAMYQxiKBcICChAAGIAEGBQYhwLCAgUQABiABMICCBAAGIAEGLEDwgIIEAAYFhgeGA-YAwCIBgGQBgqSBwMxLjSgB7If%26sclient%3Dgws-wiz-serp&ec=futura_gmv_dt_si_72586115_e&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1176401806%3A1723123689916933&ddm=0')
                break
            case 'instagram':
                window.open('https://www.instagram.com/accounts/login/?hl=en')
                break
            case 'facebook':
                window.open('https://www.facebook.com/login.php/')
                break
            default:
                toast.info('Invalid Options')
        }
    }

    return (
        <div className="login-screen">
            <div className="hero-image" />
        
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
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

            <button className='submit' type='submit'>Login</button>

            <div className="login-options">
                <a href="/forgotpassword">Forgot Password?</a>
            </div>

            <div className="social-media-buttons">
                <button className="social-media-button" onClick={() => handleSocial('google')}>
                    <img src={google} alt="Google" className="social-media-icon"/>
                </button>
                <button className="social-media-button" onClick={() => handleSocial('facebook')}>
                    <img src={facebook} alt="Facebook" className="social-media-icon"/>
                </button>
                <button className="social-media-button" onClick={() => handleSocial('instagram')}>
                    <img src={instaicon} alt="Instagram" className="social-media-icon"/>
                </button>
            </div>

            <div className="login-options">
                <a href="signup">Don't have an account? Sign up</a>
            </div>
        </form>
        </div>
    )
}

export default Login