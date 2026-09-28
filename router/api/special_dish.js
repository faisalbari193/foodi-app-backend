const express = require("express");
const {
  specialDishesCreateController,
  specialDishesUpdateController,
  getSpecialDishesController,
  specialDishesDeleteController,
} = require("../../controllers/special_dish.controller");
const router = express.Router();
router.post("/create-special-dish", specialDishesCreateController);
router.put("/update-special-dish/:id", specialDishesUpdateController);
router.get("/get-special-dish", getSpecialDishesController);
router.delete("/delete-special-dish", specialDishesDeleteController);
module.exports = router;
