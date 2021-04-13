import React from "react";
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
