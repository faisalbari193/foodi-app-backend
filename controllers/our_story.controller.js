const OurStory = require("../model/our_story.model");

// CREATE
exports.ourStoryCreateController = async (req, res) => {
  try {
    const existingOurStory = await OurStory.find({});

    if (existingOurStory.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Our story data already exists",
      });
    } else {
      const ourStoryPart = await OurStory.create(req.body);

      return res.status(201).json({
        status: true,
        message: "Our story created successfully",
        data: ourStoryPart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating our story",
      error: error.message,
    });
  }
};

// UPDATE
exports.ourStoryUpdateController = async (req, res) => {
  let { id } = req.params;

  try {
    let updateOurStory = await OurStory.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
    );

    return res.status(200).json({
      status: true,
      message: "Our story updated successfully",
      data: updateOurStory,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error updating our story",
      error: error.message,
    });
  }
};

// GET
exports.getOurStoryController = async (req, res) => {
  try {
    const ourStoryData = await OurStory.findOne({});

    return res.status(200).json({
      status: true,
      message: "Our story data retrieved successfully",
      data: ourStoryData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error retrieving our story data",
      error: error.message,
    });
  }
};
