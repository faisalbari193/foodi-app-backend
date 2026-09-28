const SpecialDishes = require("../model/special_dish.model");

// POST
exports.specialDishesCreateController = async (req, res) => {
  try {
    const existingDishes = await SpecialDishes.find({});

    if (existingDishes.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Special dishes data already exists",
      });
    } else {
      const specialDishesPart = await SpecialDishes.create(req.body);

      return res.status(201).json({
        status: true,
        message: "Special dishes created successfully",
        data: specialDishesPart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating special dishes",
      error: error.message,
    });
  }
};
// PUT
exports.specialDishesUpdateController = async (req, res) => {
  let { id } = req.params;

  try {
    let updateSpecialDishes = await SpecialDishes.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
    );

    return res.status(200).json({
      status: true,
      message: "Special dishes updated successfully",
      data: updateSpecialDishes,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error updating special dishes",
      error: error.message,
    });
  }
};
// GET
exports.getSpecialDishesController = async (req, res) => {
  try {
    const specialDishesData = await SpecialDishes.findOne({});

    return res.status(200).json({
      status: true,
      message: "Special dishes data retrieved successfully",
      data: specialDishesData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error retrieving special dishes data",
      error: error.message,
    });
  }
};
// DELETE
exports.specialDishesDeleteController = async (req, res) => {
  let { id } = req.params;

  try {
    const deleteSpecialDishes = await SpecialDishes.findOneAndDelete({
      _id: id,
    });

    if (!deleteSpecialDishes) {
      return res.status(404).json({
        status: false,
        message: "Our story data not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Our story deleted successfully",
      data: deleteSpecialDishes,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error deleting our story",
      error: error.message,
    });
  }
};
