const express = require("express");
const {
  ourStoryCreateController,
  ourStoryUpdateController,
  getOurStoryController,
  ourStoryDeleteController,
} = require("../../controllers/our_story.controller");
const router = express.Router();

router.post("/create-our-story", ourStoryCreateController);
router.put("/update-our-story/:id", ourStoryUpdateController);
router.get("/get-our-story", getOurStoryController);
router.delete('/delete-our-story',ourStoryDeleteController)

module.exports = router;
