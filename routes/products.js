const express = require('express');
const router = express.Router();
const productController=require('../controllers/productControllers');
/* GET products listing. */
router.get('/products',productController.allProducts);
/* GET single product listing. */
router.get('/products/:id',productController.singleProduct);
/* POST add products  */
router.post('/products',productController.addProduct);
/* PUT edit product. */
router.put('/products/:id',productController.editProduct);
/* DELETE delete product */
router.delete('/products/:id',productController.deleteProduct);

module.exports = router;
