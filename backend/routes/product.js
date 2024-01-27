const express = require('express');
const { getProducts, getSingleProducts } = require('../controllers/productController');
const router = express.Router(); /* Router is one of the Module of express */

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProducts);

module.exports = router;