const router = require("express").Router();
const mealController = require("../../controllers/mealController");

router
    .route("/")
    .get(mealController.findAll)
    .post(mealController.create);

router
    .route("/:id")
    .get(mealController.findById)
    .put(mealController.update)
    .delete(mealController.remove);

module.exports = router;