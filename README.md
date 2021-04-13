# Daily-Diet-Directory a MERN application.

This project allows a user to have access to a database of nutritional information, add ingredients to that database, create/save/view meals with those ingredients, and view the combined nutritional information of the ingredients in each meal.

## Table of Contents
  * [Technologies Utilized](###technologiesUtilized)
  * [Design Technologies Utilized](###DesignTechnologiesUtilized)
  * [Special Commendations](###specialCommendations)
  * [Installation of Application](###install)
  * [Demo](###demo)
  * [Issues Faced](###demo)
  * [Next Steps](###demo)
  * [GitHub Repo](###repo)
  * [View Deployed Application](###deployedLink)

## Tchnologies Utilized:
    MongoDb + Mongoose + MongoDB Atlas + Connect Mongo
    Express + Express Router + Express Sessions
    React
    NodeJs
    Passport + Passport Local
    BcryptJs
    Axios
    Heroku

## Design Tchnologies Utilized:
    Material UI: https://material-ui.com/
    Unsplash Api: https://source.unsplash.com/
    Favicon.io: https://favicon.io/

## Special Commendations:
    Much of the data used to create the local database was pulled from:
    Edamam: https://www.edamam.com/
    Fatsecret: https://www.fatsecret.com/
    CalorieKing: https://www.calorieking.com/

    The tutorial followed to create the authentication system:
    Simple MERN Passport App Tutorial: https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367
    GitHub Repo: https://github.com/b-bly/simple-mern-passport

## Installation of Application
    Clone GitHub Repository from: https://github.com/AlexBertuzzi/DDD-Test
    Open Directory
    Open Integrted Terminal
    Run npm install
    Run npm run start

## Demo

!(./assets/Screenshot(6).png)

!(./assets/Screenshot(34).png)

!(./assets/Screenshot(8).png)

!(./assets/Screenshot(33).png)

!(./assets/Screenshot(35).png)

!(./assets/Screenshot(32).png)

!(./assets/Screenshot(36).png)


## Issues Faced
    The primary issue faced during the creation of this application:
    The database structure and or routeing to the database so that one user has access to only the ingredients and meals they personaly added instead of all the ingredients and meals that have been added.

## Next Steps
    Data Structure: Either restructure the database and routes so that ingredients and meals are pushed directly to an array in the user collection or restructure database and routes so that the app calls only the ingredients and meals with a userId that is equal to the users object id.

    Charts: Utillize Recharts an npm package that assits in the development of charts and graphs in react to add a pie chart to Meal Card components displaying the macronutrient breakdown by percentage of calories for each meal.

    New Components and Functionality: Update data structure and add new component to allow for the tracking of calories and macronutirents on a daily basis. User should be able to pick from either saved meals or the ingredients and add those to thier current "day". The component will then display their current daily totals and show a graph of macronutrient percentage of calories for that day. These totals should be saved and then utilized to create a graph overtime of to calories and macronutrient percentages.

## GitHub Repo
https://github.com/AlexBertuzzi/DDD-Test

## View Deployed Application
https://ddd-test-app.herokuapp.com/

