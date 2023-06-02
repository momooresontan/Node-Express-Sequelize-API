const db = require('../models');

//create main Model
const Product = db.products;
const Review = db.reviews;

// main work

// 1) create product

exports.addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(201).send(product);

  console.log(product);
};

//2) Get all products

exports.getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    //attributes: ['title', 'price'],
  });
  res.status(200).send(products);
};

//3) Get one product

exports.getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({
    where: { id: id },
  });
  res.status(200).send(product);
};

//4) Update product

exports.updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, {
    where: { id: id },
  });
  res.status(200).send(product);
};

//5) Delete product

exports.deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send('Product has been deleted');
};

//6) Get Published product

exports.getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({
    where: { published: true },
  });
  res.status(200).send(products);
};

// 7) Connect 1:M relation Product & Reviews

exports.getProductReviews = async (req, res) => {
  //const id = req.params.id;
  const data = await Product.findAll({
    include: [
      {
        model: Review,
        as: 'review',
      },
    ],
    where: { id: 2 },
  });

  res.status(200).send(data);
};
