const express = require("express");
const {
  testimonialCreateController,
  testimonialUpdateController,
  getTestimonialController,
  testimonialDeleteController,
} = require("../../controllers/testimonial.controller");
const router = express.Router();

router.post("/create-testimonial", testimonialCreateController);
router.put("/update-testimonial/:id", testimonialUpdateController);
router.get("/get-testimonial", getTestimonialController);
router.delete("/delete-testimonial", testimonialDeleteController);
module.exports = router;
