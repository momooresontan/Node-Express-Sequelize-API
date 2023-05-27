const db = require('../models');

//Model
const Review = db.reviews;

//Main functions

// 1) Add review
exports.addReview = async (req, res) => {
  let data = {
    rating: req.body.rating,
    description: req.body.description,
  };
  const review = await Review.create(data);
  res.status(200).send(review);
};

// 2) Get All Reviews
exports.getAllReviews = async (req, res) => {
  const reviews = await Review.findAll();
};
