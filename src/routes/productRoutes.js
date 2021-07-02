const express = require ('express');
const router = express.Router();

const productController = require ('../controllers/productController')

router.get('/producto', productController.producto);
router.get('/carrito', productController.carrito);
router.get('/cargaProducto',productController.carga);
router.get('/edicionProducto',productController.edicion);

module.exports = router;