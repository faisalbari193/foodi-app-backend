const express = require("express");
const router = express.Router();
const header = require("./header");
const banner = require("./banner");
router.use("/header", header);
router.use("/banner", banner);

module.exports = router;
