const express = require('express');
const productController = require('../controllers/productController');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/addProduct', productController.addProduct);

router.get('/getAllProducts', productController.getAllProducts);

router.get('/publishedProduct', productController.getPublishedProduct);

// Review url and controller
router.post('/addReview', reviewController.addReview);
router.get('/allReviews', reviewController.getAllReviews);

// Get product reviews
router.get('/getProductReviews', productController.getProductReviews);

router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
