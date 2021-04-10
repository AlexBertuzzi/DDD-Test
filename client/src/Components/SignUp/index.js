import React, {Component} from 'react';
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
import axios from 'axios';

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


class SignUp extends Component {
  constructor() {
    super()
		this.state = {
      name: '',
      email: '',
			password: '',
      
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
    console.log('sign-up handleSubmit, name: ')
		console.log(this.state.name)
		event.preventDefault()
    
		//request to server to add a new name/password
		axios.post('/', {
      name: this.state.name,
      email: this.state.email,
			password: this.state.password
		})
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('successful signup')
        this.setState({ //redirect to login page
          redirectTo: '/login'
        })
      } else {
        console.log('name already taken')
      }
    }).catch(error => {
      console.log('signup error: ')
      console.log(error)
      
    })
	}
  
  
  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={useStyles.paper}>
        <Avatar className={useStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={useStyles.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            value={this.state.name}
            autoFocus
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
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
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClilck={this.handleSubmit}
            className={useStyles.submit}
            
          >
            Sign Up
          </Button>
          <Grid container>            
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Login"}
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
}

export default SignUp