const db = require('./models');

//create main Model
const Product = db.products;
const Review = db.reviews;

// main work

// 1) create product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };
};
