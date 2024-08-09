import {useState} from "react";
import {toast} from "react-toastify";
import {TextField, Button, Grid, Typography} from '@mui/material';

import Input from "../components/atom/Input";

import LoginForm from "../components/molecules/login-form";
import './login.scss'


const Login = () => {
  const handleSocial = (link) => {
    switch (link) {
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
    <Grid container justifyContent="center" direction="column" spacing={2} >
      <Grid item >
        <Grid container justifyContent="center" spacing={2} >
          <Grid item lg={3} sm={8} md={6} xs={10} >
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
      <Grid item >
        <Grid container justifyContent="center" direction="row" >
          <Grid item >
            <Button variant="text" onClick={() => handleSocial('instagram')} >
              <img src="/icons/instaicon.svg" alt="Instagram" className="social-media-icon"/>
            </Button>
          </Grid>
          <Grid item >
            <Button variant="text" onClick={() => handleSocial('facebook')} >
              <img src="/icons/facebook.svg" alt="Facebook" className="social-media-icon"/>
            </Button>
          </Grid>
          <Grid item >
            <Button variant="text" onClick={() => handleSocial('google')} >
              <img src="/icons/google.svg" alt="Google" className="social-media-icon"/>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div className="login-options">
          <a href="/signup">Don't have an account? Sign up</a>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login