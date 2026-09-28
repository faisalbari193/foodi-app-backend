const express = require("express");
const {
  testimonialCreateController,
  testimonialUpdateController,
  getTestimonialController,
} = require("../../controllers/testimonial.controller");
const router = express.Router();

router.post("/create-testimonial", testimonialCreateController);
router.put("/update-testimonial/:id", testimonialUpdateController);
router.get("/get-testimonial", getTestimonialController);

module.exports = router;
