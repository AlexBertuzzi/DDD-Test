const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Daily-Diet-Directory"
  );

const newUser = [
    {
     name: "Test User",
     email: "test@email.com",
     password: "test"   
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(newUser))
    .then(data => {
        console.log(data.result.n  + "data inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const newMeal = [{
    title: "Test Meal",
    foods: [{
        name: "Chicken Breast",
        amount: 150,
        calories: 1234,
        protein: 123,
        carbs: 0,
        fat: 12
    },
    {
        name: "Rice",
        amount: 200,
        calories: 2345,
        protein: 0,
        carbs: 200,
        fat: 0
    }
],
    notes: "These are the Notes"
}];
    
    db.Meal
        .remove({})
        .then(() => db.Meal.collection.insertMany(newMeal))
        .then(data => {
            console.log(data.result.n  + "data inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

const newFood = [{
    name: "Love",
    amount: 100,
    calories: 400,
    protein: 60,
    carbs: 40,
    fat: 0
}]
           
    db.Food
        .remove({})
        .then(() => db.Food.collection.insertMany(newFood))
        .then(data => {
            console.log(data.result.n  + "data inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });