const Header = require("../model/header.model");

exports.headerCreateController = async (req, res) => {
  try {
    const existingHeader = await Header.find({});
    if (existingHeader.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Header data already exists",
      });
    } else {
      const headerPart = await Header.create(req.body);
      return res.status(201).json({
        status: true,
        message: "Header part created successfully",
        data: headerPart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating header part",
      error: error.message,
    });
  }
};
exports.headerUpdateController = async (req, res) => {
  let { id } = req.params;
  try {
    let updateHeader = await Header.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      status: true,
      message: "Header part updated successfully",
      data: updateHeader,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error updating header part",
      error: error.message,
    });
  }
};
exports.getHeaderController= async (req, res) => {
  try {
    const headerData = await Header.findOne({});
    return res.status(200).json({
      status: true,
      message: "Header data retrieved successfully",
      data: headerData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error retrieving header data",
      error: error.message,
    });
  }
};