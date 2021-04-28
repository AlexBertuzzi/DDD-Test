import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import API from '../../Utils/API';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
    },
    justifyContent: "center",
    padding: theme.spacing(8, 0, 8),
    alignItems: "center"
  },
  content: {
    marginRight: "3%",
    marginLeft: "20%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
    margin: '5%',
    padding: '5%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddFood() {
  const classes = useStyles();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [carbs, setCarbs] = useState();
  const [fat, setFat] = useState();
  const [id, setId] = useState([]);

 useEffect(() => {
   loadId()
 }, [])

 function loadId () {
   axios.get('/api/user').then(response => {
     console.log("look at this")
     console.log(response.data)
     setId(response.data.user._id)
   })
 }

  function handleName (event) {
      setName(event.target.value)
  };
  function handleAmount (event) {
      setAmount(event.target.value)
  };
  function handleCalories (event) {
      setCalories(event.target.value)
  };
  function handleProtein (event) {
      setProtein(event.target.value)
  };
  function handleCarbs (event) {
      setCarbs(event.target.value)
  };
  function handleFat (event) {
      setFat(event.target.value)
  };

  function SaveFood (event) {
      event.preventDefault();
      console.log("save food hit")
      API.saveFood ({
          id: id,
          name: name,
          amount: amount,
          calories: calories,
          protein: protein,
          carbs: carbs,
          fat: fat
      })
      .res(window.location.href="/ingredientList")
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper elevation={3} className={classes.content}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MenuBookIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Custom Ingredient
        </Typography>
        <form className={classes.form} >
            <TextField 
                variant="outlined"
                fullWidth
                label="Ingredient Name" 
                margin="normal"
                name="name" 
                type="text" 
                onChange={handleName}>
            </TextField>
            <TextField 
                variant="outlined"
                fullWidth
                label="Weight In Grams" 
                margin="normal"
                name="amount" 
                type="number" 
                onChange={handleAmount}>
                <input type="number"/>
            </TextField>
            <TextField 
                variant="outlined"
                fullWidth
                label="Calories" 
                margin="normal"
                name="calories" 
                type="number" 
                onChange={handleCalories}>
                <input type="number"/>
            </TextField>
            <TextField 
                variant="outlined"
                fullWidth
                label="Protein" 
                margin="normal"
                name="protein" 
                type="number" 
                onChange={handleProtein}>
                <input type="number"/>
            </TextField>
            <TextField 
                variant="outlined"
                fullWidth
                label="Carbs" 
                margin="normal"
                name="carbs" 
                type="number" 
                onChange={handleCarbs}>
                <input type="number"/>
            </TextField>
            <TextField 
                variant="outlined"
                fullWidth
                label="Fat" 
                margin="normal"
                name="fat" 
                type="number" 
                onChange={handleFat}>
                <input type="number"/>
            </TextField>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={SaveFood}
                href="/ingredientList"
            >
                Add Ingredient
            </Button>
        </form>
      </div>
      </Paper>
    </Container>
  );
}