const express = require("express");
const {
  footerCreateController,
  footerUpdateController,
  getFooterController,
} = require("../../controllers/footer.controller");
const router = express.Router();

router.post("/create-footer", footerCreateController);
router.put("/update-footer/:id", footerUpdateController);
router.get("/get-footer", getFooterController);

module.exports = router;
