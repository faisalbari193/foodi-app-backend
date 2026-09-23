const Banner = require("../model/banner.model");
exports.bannerCreateController = async (req, res) => {
  try {
    // Check existing banner
    const existingBanner = await Banner.findOne({});

    if (existingBanner) {
      return res.status(409).json({
        status: false,
        message: "Banner data already exists",
      });
    }
    const bannerPart = await Banner.create(req.body);

    return res.status(201).json({
      status: true,
      message: "Banner created successfully",
      data: bannerPart,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating banner",
      error: error.message,
    });
  }
};
exports.getBanner = async (req, res) => {
    try {
        const bannerData = await Banner.findOne({});

        if (!bannerData) {
            return res.status(404).json({
                status: false,
                message: "Banner not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Banner fetched successfully",
            data: bannerData
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error fetching banner",
            error: error.message
        });
    }
};
exports.updateBanner = async (req, res) => {
    try {
        const updatedBanner = await Banner.findOneAndUpdate(
            {},
            req.body,
            {
                new: true,
            }
        );
        if (!updatedBanner) {
            return res.status(404).json({
                status: false,
                message: "Banner not found"
            });
        }
        return res.status(200).json({
            status: true,
            message: "Banner updated successfully",
            data: updatedBanner
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error updating banner",
            error: error.message
        });
    }
};
