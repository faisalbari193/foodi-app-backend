const Testimonial = require("../model/testimonial.model");

// CREATE
exports.testimonialCreateController = async (req, res) => {
  try {
    const existingTestimonial = await Testimonial.find({});

    if (existingTestimonial.length > 0) {
      return res.status(409).json({
        status: false,
        message: "Testimonial data already exists",
      });
    } else {
      const testimonialPart = await Testimonial.create(req.body);

      return res.status(201).json({
        status: true,
        message: "Testimonial created successfully",
        data: testimonialPart,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating testimonial",
      error: error.message,
    });
  }
};

// UPDATE
exports.testimonialUpdateController = async (req, res) => {
  let { id } = req.params;

  try {
    let updateTestimonial = await Testimonial.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
    );

    return res.status(200).json({
      status: true,
      message: "Testimonial updated successfully",
      data: updateTestimonial,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error updating testimonial",
      error: error.message,
    });
  }
};

// GET
exports.getTestimonialController = async (req, res) => {
  try {
    const testimonialData = await Testimonial.findOne({});

    return res.status(200).json({
      status: true,
      message: "Testimonial data retrieved successfully",
      data: testimonialData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error retrieving testimonial data",
      error: error.message,
    });
  }
};
