const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController')
const productController = require ('../controllers/productController')
const usersController = require ('../controllers/usersController')

router.get('/', mainController.index);
router.get('/producto', productController.producto);
router.get('/carrito', productController.carrito);
router.get('/login', usersController.login);
router.get('/registro', usersController.registro);
router.get('/cargaProducto',productController.carga);
router.get('/edicionProducto',productController.edicion);
router.get('/profileAdmin',usersController.profileAdmin);
router.get('/profileUser',usersController.profileUser);

module.exports = router;