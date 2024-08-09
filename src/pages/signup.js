import { useState } from "react";
import { toast } from "react-toastify";
import { TextField, Button, Grid, Typography } from '@mui/material';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles'

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
        borderColor: '#ccc',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#007bff',
      },
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Poppins',
      fontSize: '1rem',
      padding: '0.8rem 1rem',
    },
  })

const Signup = () => {
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
            toast.success('Signup Successful. Please Login')
        }
    }

    return (
        <ThemeProvider theme={theme}>
        <div className="signup-screen">
            <div className="hero-image" />
        <form className="signup-form" onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Signup
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

            <div className="signup-options">
                <a href="/">Already Signed Up? Login</a>
            </div>
        </Grid>
        </form>
        </div>
        </ThemeProvider>
    )
}

export default Signup