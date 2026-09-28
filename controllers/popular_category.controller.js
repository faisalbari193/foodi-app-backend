const popularCategory = require("../model/popular_category.model");

// CREATE
exports.popularCategoryCreateController = async (req, res) => {
  try {
    const existingCategory = await popularCategory.find({});

    if (existingCategory.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Popular category data already exists",
      });
    } else {
      const categoryPart = await popularCategory.create(req.body);

      return res.status(201).json({
        status: true,
        message: "Popular category created successfully",
        data: categoryPart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating popular category",
      error: error.message,
    });
  }
};
// UPDATE
exports.popularCategoryUpdateController = async (req, res) => {
  let { id } = req.params;

  try {
    let updateCategory = await popularCategory.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
    );

    return res.status(200).json({
      status: true,
      message: "Popular category updated successfully",
      data: updateCategory,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error updating popular category",
      error: error.message,
    });
  }
};
// GET
exports.getPopularCategoryController = async (req, res) => {
  try {
    const categoryData = await popularCategory.findOne({});

    return res.status(200).json({
      status: true,
      message: "Popular category data retrieved successfully",
      data: categoryData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error retrieving popular category data",
      error: error.message,
    });
  }
};
// DELETE
exports.popularCategoryDeleteController = async (req, res) => {
  let { id } = req.params;

  try {
    const deletePopularCategory = await popularCategory.findOneAndDelete({
      _id: id,
    });

    if (!deletePopularCategory) {
      return res.status(404).json({
        status: false,
        message: "Our story data not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Our story deleted successfully",
      data: deletePopularCategory,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error deleting our story",
      error: error.message,
    });
  }
};
