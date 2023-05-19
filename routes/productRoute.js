const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post(
  '/addProduct',
  productController.addProduct
);

router.get(
  '/getAllProducts',
  productController.getAllProduct
);

router.get(
  '/publishedProduct',
  productController.getPublishedProduct
);

router.get(
  '/:id',
  productController.getOneProduct
);

router.put(
  '/:id',
  productController.updateProduct
);

router.delete(
  '/:id',
  productController.deleteProduct
);

module.exports = router;
