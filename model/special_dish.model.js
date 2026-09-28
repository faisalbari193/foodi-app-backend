const mongoose = require("mongoose");

const specialDishesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    sub_title: {
      type: String,
      required: true,
    },

    left_arrow: {
      type: String,
      required: true,
    },

    right_arrow: {
      type: String,
      required: true,
    },

    heart_icon: {
      type: String,
      required: true,
    },

    food_image: {
      type: String,
      required: true,
    },

    food_title: {
      type: String,
      required: true,
    },

    food_info: {
      type: String,
      required: true,
    },

    food_price: {
      type: String,
      required: true,
    },

    food_rating: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const SpecialDishes = mongoose.model("SpecialDishes", specialDishesSchema);

module.exports = SpecialDishes;
