const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema(
  {
    footer_icon: {
      type: String,
      required: true,
      trim: true,
    },

    footer_info: {
      type: String,
      required: true,
      trim: true,
    },

    useful_links: {
      type: [String],
      required: true,
    },

    main_menu: {
      type: [String],
      required: true,
    },

    contact: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Footer = mongoose.model("Footer", footerSchema);

module.exports = Footer;
