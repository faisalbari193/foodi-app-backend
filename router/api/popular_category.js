const express = require("express");
const {
  popularCategoryCreateController,
  popularCategoryUpdateController,
  getPopularCategoryController,
} = require("../../controllers/popular_category.controller");
const router = express.Router();

router.post("/popular-category-create", popularCategoryCreateController);
router.put("/update-popular-category/:id", popularCategoryUpdateController);
router.get("/get-popular-category", getPopularCategoryController);

module.exports = router;
