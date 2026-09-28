const Footer = require("../model/footer.model");

// CREATE
exports.footerCreateController = async (req, res) => {
  try {
    const existingFooter = await Footer.find({});

    if (existingFooter.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Footer data already exists",
      });
    } else {
      const footerPart = await Footer.create(req.body);

      return res.status(201).json({
        status: true,
        message: "Footer created successfully",
        data: footerPart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating footer",
      error: error.message,
    });
  }
};

// UPDATE
exports.footerUpdateController = async (req, res) => {
  let { id } = req.params;

  try {
    let updateFooter = await Footer.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: true,
      message: "Footer updated successfully",
      data: updateFooter,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error updating footer",
      error: error.message,
    });
  }
};

// GET
exports.getFooterController = async (req, res) => {
  try {
    const footerData = await Footer.findOne({});

    return res.status(200).json({
      status: true,
      message: "Footer data retrieved successfully",
      data: footerData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error retrieving footer data",
      error: error.message,
    });
  }
};
