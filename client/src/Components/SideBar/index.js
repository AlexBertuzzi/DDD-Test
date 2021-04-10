import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const drawerWidth = "15%";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginRight: "5%"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  
}));

function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button onClick={() => window.location.href="/viewMeals"}>
                <ListItemText primary =
                  "Meals">
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button onClick={() => window.location.href="/createMeal"}>
                <ListItemText primary =
                  "Create New Meal">
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button onClick={() => window.location.href="/ingredientList"}>
                <ListItemText primary =
                  "Ingredient List">
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button onClick={() => window.location.href="/createIngredient"}>
                <ListItemText primary =
                  "Add New Ingredient">
                </ListItemText>
              </ListItem>
              <Divider />
          </List> 
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;