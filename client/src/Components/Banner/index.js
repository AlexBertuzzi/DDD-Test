import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));


function Banner () {
 const classes = useStyles();
  
  function logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          name: null
        })
        window.location.href="/login"
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }
  
    return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} link="/viewMeals">
              <Link href="/viewMeals" color="inherit" >
                Daily Diet Directory
              </Link>
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={logout}
                href="/login"
              >
                <Typography>
                name goes here
                </Typography>
                <AccountCircle />
                <Typography>
                Log Out 
                </Typography>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Banner;

