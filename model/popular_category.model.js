const mongoose = require("mongoose");

const popularCategorySchema = new mongoose.Schema(
  {
    category_title: {
      type: String,
      required: true,
    },

    category_subtitle: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    image_title: {
      type: String,
      required: true,
    },

    image_info: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const popularCategory = mongoose.model(
  "PopularCategory",
  popularCategorySchema,
);

module.exports = popularCategory;
