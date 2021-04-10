import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "5%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    padding: theme.spacing(3, 0, 8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmojiEmotionsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome to the Daily Diet Directory
        </Typography>
        <Typography component="h3">
          This app allows you to create your own nutritional database filled with individual ingredients and saved meals.
        </Typography>
          
          <Grid container spacing={3}>  
            <Grid item xs={12} sm={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    href="/ingredientList"
                >
                    Ingredient List
                </Button>
            </Grid>     
            <Grid item xs={12} sm={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    href="/createIngredient"
                >
                    Create Custom Ingredient
                </Button>
            </Grid>     
            <Grid item xs={12} sm={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    href="/createMeal"
                >
                    Create New Meal
                </Button>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    href="/viewMeals"
                >
                    View Meals
                </Button>
            </Grid>
            
          </Grid>
      </div>
    </Container>
  );
}