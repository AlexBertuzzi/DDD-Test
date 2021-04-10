import axios from "axios"
export default {
    //Coach
    getUser: function(id) {
        return axios.get("/api/coach/" + id);
    },
    saveUser: function(coachData) {
        return axios.post("/api/coach", coachData);
    },
    //Meals
    getMeals: function() {
        return axios.get("/api/meal");
    },
    getMeal: function(id) {
        return axios.get("/api/meal/" + id);
    },
    saveMeal: function(mealData) {
        console.log(mealData)
        return axios.post("/api/meal", mealData);
    },
    updateMeal: function(id) {
        return axios.get("/api/meal/" + id);
    },
    deleteMeal: function(id) {
        return axios.delete("/api/meal/" + id);
    },
    //Custom Ingredients
    getFoods: function() {
        return axios.get("/api/food");
    },
    getFood: function(id) {
        return axios.get("/api/food/" + id);
    },
    saveFood: function(foodData) {
        console.log(foodData)
        return axios.post("/api/food", foodData);
    },
    updateFood: function(id) {
        return axios.get("/api/food/" + id);
    },
    deleteFood: function(id) {
        return axios.delete("/api/food/" + id);
    },


}