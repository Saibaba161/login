import { useState } from "react";
import { toast } from "react-toastify";
import { TextField, Button, Grid, Typography } from '@mui/material';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles'

import google from '../assets/google.svg';
import instaicon from '../assets/instaicon.svg'
import facebook from '../assets/facebook.svg'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

const StyledTextField = styled(TextField) ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#ccc', // Keep the same on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#007bff', // Use your primary color for focus
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1rem',
    padding: '0.8rem 1rem',
  },
})

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        let hasError = false;

    if (!email) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (!hasError) {
      console.log(email, password);
      toast.success('Login Successful')
    }
  };


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
        <ThemeProvider theme={theme}>
        <div className="login-screen">
            <div className="hero-image" />

        <form className="login-form" style={{'fontFamily': 'Poppins'}} onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
            </Grid>

            <Grid item>
              <StyledTextField
                id="email"
                placeholder="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                fullWidth
                helperText={passwordError ? 'Email is required' : ''}
                sx= {{
                  '& .MuiFormHelperText-root': {
                    border: "none"
                  }
                }}
              />
            </Grid>

            <Grid item>
              <StyledTextField
                id="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={passwordError ? 'Password is required' : ''}
                fullWidth
              />
            </Grid>

            <Grid item>
              <Button className="submit" type="submit" variant="contained">
                Login
              </Button>
            </Grid>

            <div className="login-options">
              <a href="/forgotpassword">Forgot Password?</a>
            </div>

            <Grid item>
              <div className="social-media-buttons">
                <div className="social-media-button" onClick={() => handleSocial('instagram')}>
                  <img src={instaicon} alt="Instagram" className="social-media-icon" />
                </div>
                <div className="social-media-button" onClick={() => handleSocial('facebook')}>
                  <img src={facebook} alt="Facebook" className="social-media-icon" />
                </div>
                <div className="social-media-button" onClick={() => handleSocial('google')}>
                  <img src={google} alt="Google" className="social-media-icon" />
                </div>
              </div>
            </Grid>

            <div className="login-options">
              <a href="/signup">Don't have an account? Sign up</a>
            </div>
          </Grid>
        </form>
        </div>
        </ThemeProvider>
    )
}

export default Login