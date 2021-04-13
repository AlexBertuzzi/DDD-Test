import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import API from '../../Utils/API';
import Food from '../../food.js';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    alignItems: "center",
  },
  content: {
    marginRight: "5%",
    marginLeft: "20%",
    alignItems: "center",
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
  },
  width: {
    width: "100%"
  },
  title: {
    textAlign: 'center',
    fontSize: '25px'
  },
  heading: {
    textAlign: 'left',
    fontSize: '20px'
  },
  form: {
    borderStyle: 'groove',
    borderWidth: '2px',
    borderRadius: '5px',
    padding: '5px',
    margin: '10px',
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
  table: {
    minWidth: 650,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function CreateMealPlan() {
 const classes = useStyles();
 const food = Food;
 const [title, setTitle] = useState({});
 const [amount, setAmount] = useState([]);
 const [amountObject, setAmountObject] = useState([]);
 const [ingredient, setIngredient] = useState({});
 const [dataObject, setDataObject] = useState([]);
 const [note, setNote] = useState({});
 const [custom, setCustom] = useState([]);

 useEffect(() => {
  loadCustom()
}, [])

function loadCustom() {
  API.getFoods()
  .then(res =>
      setCustom(res.data)
      )
      .catch(err => console.log(err));
};

 const ITEM_HEIGHT = 48;
 const ITEM_PADDING_TOP = 8;
 const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
 };
  
 function handleTitleChange(event) {
   setTitle(event.target.value)
 };

const names = Food.map(a => a.name);

const handleChange = (event) => {
  setIngredient(event.target.value);
};
      
function handleDataObject(event) {
  event.preventDefault()
    console.log(ingredient);
    let potato = {};
    if (food.find(obj => obj.name === ingredient)){
      potato = food.find(obj => obj.name === ingredient)
    }
    else {
      potato = custom.find(obj => obj.name === ingredient)
    }
    let newArray = [...dataObject];
    newArray.push(potato);
    setDataObject(newArray);
}

 function handleAmountSelection(event) {
   setAmount(event.target.value)
 };
 function handleAmountObject(event) {
   event.preventDefault()
   console.log(amount);
   let stuff = {};
   stuff = amount;
   let newStuff = [...amountObject];
   newStuff.push(stuff);
   setAmountObject(newStuff);
 };
 function handleAddButton(event) {
   event.preventDefault();
   handleDataObject(event);
   handleAmountObject(event);
 };

 function handleNotes(event) {
   setNote(event.target.value)
 };

 function saveMeal(evt) {
   
   evt.preventDefault();
   let mealToSave = {};
   let foodsToSave = [];
   let foodStuff = {};
   let length = dataObject.length
   for (let i = 0; i<length; i++) {
     foodStuff =
           {
           name: dataObject[i].name,
           amount: amountObject[i],
           calories: dataObject[i].calories/100 * amountObject[i],
           protein: dataObject[i].protein/100 * amountObject[i],
           carbs: dataObject[i].carbs/100 * amountObject[i],
           fat: dataObject[i].fat/100 * amountObject[i]
           }
         foodsToSave.push(foodStuff)
    }

  mealToSave = {
    title: title,
    foods: foodsToSave,
    notes: note
  }
   API.saveMeal(
    mealToSave
   ).res(window.location.href="/viewMeals")
};

function CustomSelector (){
        if (custom.length > 0){
          const names2 = custom.map(a => a.name);
          return(
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Select Custom Ingredient</InputLabel>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={ingredient}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                {names2.map((name) => (
                   <MenuItem key={name} value={name} >
                        {name}
                   </MenuItem>
                ))}
                </Select>
            </FormControl>
          )
        }
        else{
          return(
            <Typography>
                No Custom Ingredients Saved Yet
            </Typography>
          )
        } 
}

  return (
    <Container component="main" className={classes.root}>
      <Paper elevation={3} className={classes.content}>
      <CssBaseline />
        <Avatar className={classes.avatar}>
          <MenuBookIcon />
        </Avatar>
        <Typography className={classes.title} >
            Create Meal 
        </Typography>
        <div>
        <form className={classes.form}>
        <TextField id="standard-basic" label="Title" name="title" className={classes.center} onChange={handleTitleChange}/>
        </form>
        <div className={classes.center}>
          <Typography className={classes.center} component="h3" variant="h5">
            Add Ingredients to Meal
          </Typography>
        </div>
           <form className={classes.form}> 
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Select Ingredient</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  value={ingredient}
                  onChange={handleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name} >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <CustomSelector />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="standard-basic" label="Weight In Grams" name="amount" type="number" onChange={handleAmountSelection}>
                <input type="number"/>
              </TextField>
              </Grid>
            </Grid>
             <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleAddButton}
                className={classes.submit}
              >
                Add Ingredient
            </Button> 
         </form>
          <form className={classes.form}>
            <TextField
            id="outlined-multiline-static"
            label="Add Notes for Meal"
            name="note"
            multiline
            rows={4}
            variant="outlined"
            className={classes.width}
            onChange={handleNotes}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={saveMeal}
                href="/viewMeals"
              >
                Create Meal 
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );         
}

