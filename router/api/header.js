const express = require("express");
const {
  headerController,
  headerCreateController,
  headerUpdateController,
  getHeaderController,
} = require("../../controllers/header.controller");
const router = express.Router();

router.post("/header-part/create", headerCreateController);
router.put("/header-part/update/:id", headerUpdateController);
router.get("/getHeader", getHeaderController);

module.exports = router;
