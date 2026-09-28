const mongoose = require("mongoose");

const ourStorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    explore_btn: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      required: true,
      trim: true,
    },

    icon_title: {
      type: String,
      required: true,
      trim: true,
    },

    icon_info: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const OurStory = mongoose.model("OurStory", ourStorySchema);

module.exports = OurStory;
