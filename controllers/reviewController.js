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
  const reviews = await Review.findAll({});
  res.status(200).send(reviews);
};

// 3) Get One Review
exports.getOneReview = async (req, res) => {
  const id = req.params.id;
  const review = await Review.findOne({
    where: { id },
  });
  res.status(200).send(review);
};

// 4) Update Review
exports.updateReview = async (req, res) => {
  const id = req.params.id;
  const review = await Review.update(req.body, {
    where: { id },
  });
  res.status(200).send(review);
};
