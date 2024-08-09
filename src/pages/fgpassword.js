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

const FGPassword = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)

        let hasError = false;

        if (!email) {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (!hasError) {
            console.log(email);
            toast.success('A reset email has been sent')
        }
    }


    return (
        <ThemeProvider theme={theme}>
        <div className="password-screen">
        <div className="hero-image">
        </div>
        <form className="password-form" onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Forgot Password
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
                helperText={emailError ? 'Email is required' : ''}
              />
            </Grid>

            <Grid item>
              <Button className="submit" type="submit" variant="contained">
                Submit
              </Button>
            </Grid>

        </Grid>
        </form>
        </div>
        </ThemeProvider>
    )
}

export default FGPassword