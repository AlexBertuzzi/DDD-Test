import React, { Component } from "react";
//import axios from 'axios';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import CreateMeal from "./Components/CreateMeal";
import IngredientList from "./Components/Foods";
import MealCard from "./Components/MealCard";
import AddFood from "./Components/AddFood";
import SideBar from "./Components/SideBar";
import router from '../../routes/api/user';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      name: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    router.get('/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          name: response.data.user.name
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          name: null
        })
      }
    })
  }

 render() {
  return (
      <Router>
          <Switch>
              <Route exact path={["/", "/signUp"]}>
                  <SignUp />
              </Route>
              <Route exact path={["/login"]}>
                  <Login updateUser={this.updateUser}/>
              </Route>
              <Route exact path="/ingredientList">
                <Banner updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
                <SideBar />
                <IngredientList />
                <Footer />
              </Route>
              <Route exact path="/createIngredient">
                <Banner updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
                <SideBar />
                <AddFood />
                <Footer />
              </Route>
              <Route exact path="/createMeal">
                <Banner updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
                <SideBar />
                <CreateMeal />
                <Footer />
              </Route>
              <Route exact path="/viewMeals">
                <Banner updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
                <SideBar />
                <MealCard />
                <Footer />
              </Route>
          </Switch>
      </Router>
  )
}
}

export default App;
