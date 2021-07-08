const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController')
const productController = require ('../controllers/productController')
const usersController = require ('../controllers/usersController')

router.get('/', mainController.index);
router.get('/quienesSomos',mainController.quienesSomos);

router.get('/login', usersController.login);
router.post('/login', usersController.accesoAdmin);
// [ check('email').isEmail().withMessage('Email invalido')
//     check('contraseña').islenght({min:8}).withMessage('la contraseña debe contener 8 caractereses'),
// ], 


router.get('/registro', usersController.registro);

router.get('/profileAdmin',usersController.profileAdmin);
router.get('/profileUser',usersController.profileUser);



module.exports = router;