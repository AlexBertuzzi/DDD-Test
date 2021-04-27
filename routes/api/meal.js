const router = require("express").Router();
const mealController = require("../../controllers/mealController");

router
    .route("/")
    .get(mealController.findAll)
    .post(mealController.create)
    .delete(mealController.remove);

module.exports = router;