import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Daily Diet Directory
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login () {
  const classes = useStyles();
  const [name, setName] = useState({});
  const [password, setPassword] = useState({});

  function handleName(event) {
    setName(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')
    
    axios
    .post('/api/user/login', {
      name: name,
      password: password
    },
    )
    .then(response => {
      console.log('you made it this far')
      console.log('login response: ')
      console.log(response)
      if (response.status === 200) {
        // update App.js state
        // this.props.updateUser({
        //   loggedIn: true,
        //   name: response.data.name
        // })
        // update the state to redirect to home
        window.location.href="/viewMeals"
    
      }
    }).catch(error => {
      console.log('login error: ')
      console.log(error);
    })
  }
  
  
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoFocus
            onChange={handleName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
        Login
          </Button>
          <Grid container>            
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account yet? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


export default Login;