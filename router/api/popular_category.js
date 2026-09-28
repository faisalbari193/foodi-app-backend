const express = require("express");
const {
  popularCategoryCreateController,
  popularCategoryUpdateController,
  getPopularCategoryController,
  popularCategoryDeleteController,
} = require("../../controllers/popular_category.controller");
const router = express.Router();

router.post("/popular-category-create", popularCategoryCreateController);
router.put("/update-popular-category/:id", popularCategoryUpdateController);
router.get("/get-popular-category", getPopularCategoryController);
router.delete('/delete-popular-category',popularCategoryDeleteController)
module.exports = router;
