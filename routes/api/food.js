const router = require("express").Router();
const foodController = require("../../controllers/foodController");

router
    .route("/")
    .get(foodController.findAll)
    .post(foodController.create)
    .delete(foodController.remove);

module.exports = router;