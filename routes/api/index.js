const router = require("express").Router();
const userRoutes = require("./user");
const foodRoutes = require("./food");
const mealRoutes = require("./meal");

router.use("/user", userRoutes);
router.use("/food", foodRoutes);
router.use("/meal", mealRoutes);

module.exports = router;