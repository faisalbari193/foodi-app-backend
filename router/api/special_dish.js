const express = require("express");
const { specialDishesCreateController, specialDishesUpdateController, getSpecialDishesController } = require("../../controllers/special_dish.controller");
const router = express.Router();
router.post('/create-special-dish',specialDishesCreateController)
router.put('/update-special-dish',specialDishesUpdateController)
router.get('/get-special-dish',getSpecialDishesController)
module.exports = router;
