const express = require("express");
const {
  ourStoryCreateController,
  ourStoryUpdateController,
  getOurStoryController,
} = require("../../controllers/our_story.controller");
const router = express.Router();

router.post("/create-our-story", ourStoryCreateController);
router.put("/update-our-story/:id", ourStoryUpdateController);
router.get("/get-our-story", getOurStoryController);

module.exports = router;
