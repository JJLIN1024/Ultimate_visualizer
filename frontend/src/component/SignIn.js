import React, { useState, useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TextField, InputAdornment, IconButton } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailValidator from 'email-validator';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [userInfo, setuserInfo] = useState({
    email: '',
    password: ''
  });
  const [emailErrorText, setEmailErrorText] = useState('');
  const [emailIsNotValid, setEmailIsNotValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const googleAuthUrl = "http://localhost:5000/auth/google";
  const facebookAuthUrl = "http://localhost:5000/auth/facebook";
  const githubAuthUrl = "http://localhost:5000/auth/github";

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (e) => {
    setuserInfo({...userInfo, email:e.target.value});
    if (!EmailValidator.validate(e.target.value)) {
      setEmailErrorText('Email not valid!');
      setEmailIsNotValid(true)
    } else {
      setEmailErrorText('');
      setEmailIsNotValid(false);
    }
  }

  const handleSignUp = () => {
    ; // axios call auth local
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>

          <TextField
            error={emailIsNotValid}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
            helperText={emailErrorText}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword? "text": "password"}
            id="password"
            autoComplete="current-password"
            onChange={(e) => setuserInfo({...userInfo, password:e.target.value})}
            InputProps={{ 
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!(userInfo.email && userInfo.password) || emailIsNotValid}
            onClick={handleSignUp}
          >
            Log In
          </Button>

          <Button
            href={facebookAuthUrl}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In With FaceBook
          </Button>

          <Button
            href={googleAuthUrl} 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In With Google
          </Button>


          <Button
            href={githubAuthUrl}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In With Github
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}