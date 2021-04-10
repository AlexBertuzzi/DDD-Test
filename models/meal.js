const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newMeal = new Schema({
    title: {type: String},
    foods: [{
        name: {type: String},
        amount: {type: Number},
        calories: {type: Number},
        protein: {type: Number},
        carbs: {type: Number},
        fat: {type: Number}
    }],
    notes: {type: String}

})

module.exports = Meal = mongoose.model("Meal", newMeal);