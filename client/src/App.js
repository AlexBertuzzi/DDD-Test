import React from "react";
//import axios from 'axios';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import CreateMeal from "./Components/CreateMeal";
import IngredientList from "./Components/Foods";
import MealCard from "./Components/MealCard";
import AddFood from "./Components/AddFood";
import SideBar from "./Components/SideBar"

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loggedIn: false,
//       name: null
//     }

//     this.getUser = this.getUser.bind(this)
//     this.componentDidMount = this.componentDidMount.bind(this)
//     this.updateUser = this.updateUser.bind(this)
//   }

//   componentDidMount() {
//     this.getUser()
//   }

//   updateUser (userObject) {
//     this.setState(userObject)
//   }

//   getUser() {
//     axios.get('/api/user').then(response => {
//       console.log('Get user response: ')
//       console.log(response.data)
//       if (response.data.user) {
//         console.log('Get User: There is a user saved in the server session: ')

//         this.setState({
//           loggedIn: true,
//           name: response.data.user.name
//         })
//       } else {
//         console.log('Get user: no user');
//         this.setState({
//           loggedIn: false,
//           name: null
//         })
//       }
//     })
//   }

//  render() {
  function App () {
  return (
      <Router>
          <Switch>
              <Route exact path={["/", "/signUp"]}>
                  <SignUp />
              </Route>
              <Route exact path={["/login"]}>
                  <Login  />
              </Route>
              <Route exact path="/ingredientList">
                <Banner />
                <SideBar />
                <IngredientList />
                <Footer />
              </Route>
              <Route exact path="/createIngredient">
                <Banner />
                <SideBar />
                <AddFood />
                <Footer />
              </Route>
              <Route exact path="/createMeal">
                <Banner />
                <SideBar />
                <CreateMeal />
                <Footer />
              </Route>
              <Route exact path="/viewMeals">
                <Banner />
                <SideBar />
                <MealCard />
                <Footer />
              </Route>
          </Switch>
      </Router>
  )
}


export default App;
