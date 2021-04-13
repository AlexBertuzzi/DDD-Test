import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
  
        Daily-Diet-Directory
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?diet)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
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
        window.location.href="/viewMeals"
      }
    }).catch(error => {
      console.log('login error: ')
      console.log(error);
    })
  }
 
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
      <Typography component="h1" variant="h5">
          Daily-Diet-Directory
        </Typography>
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
        <Box mt={8}>
        <Copyright />
      </Box>
      </div>
      </Grid>
    </Grid>
  );
}


export default Login;