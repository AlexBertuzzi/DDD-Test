import axios from "axios"
export default {
    
    //Meals
    getMeals: function() {
        return axios.get("/api/meal");
    },
    saveMeal: function(mealData) {
        return axios.post("/api/meal", mealData);
    },
    deleteMeal: function(customId) {
        return axios.delete("/api/meal", {params: {customId}});
    },
    //Custom Ingredients
    getFoods: function() {
        return axios.get("/api/food");
    },
    saveFood: function(foodData) {
        return axios.post("/api/food", foodData);
    },
    deleteFood: function(customId) {
        return axios.delete("/api/food", {params: {customId}});
    }
}