const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newFood = new Schema({
    name: {type: String},
    amount: {type: Number},
    calories: {type: Number},
    protein: {type: Number},
    carbs: {type: Number},
    fat: {type: Number}
})

module.exports = Food = mongoose.model("Food", newFood);