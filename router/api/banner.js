const express = require("express");
const {
  bannerCreateController,
  updateBanner,
  getBanner,
} = require("../../controllers/banner.controller");
const router = express.Router();

router.post("/banner-part/create", bannerCreateController);
router.put("/banner-update/:id", updateBanner);
router.get("/getBanner", getBanner);
module.exports = router;
