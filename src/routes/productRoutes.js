const express = require ('express');
const router = express.Router();
const path = require ('path');
const multer = require('multer'); // Requiero el multer para poder luego subir las imagenes y tratarlas.
const productController = require ('../controllers/productController');

// Tratamiento de Imagenes

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/camiones'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = 'img' + '-' + file.originalname;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});


const uploadFile = multer({ storage: multerDiskStorage });


// router.get('/producto', productController.producto);

// - /products (GET)  Obtener todo el  Listado de productos
router.get('/producto',productController.listado);

// - /products (POST)            —> Acción de creación (almacenamiento de producto luego de creación)
// - /products/create (GET)   —> Formulario de creación de productos
// ESte sirve para enviar el formulario de creacion, falta el de envio de info
router.get('/cargaProducto',productController.carga);
router.post('/cargaProducto', uploadFile.single('imagenProducto'), productController.store);



// - /products/:id (GET)   —> Detalle de un producto particular
// Se puede utilizar este, falta traer el ID
router.get('/carrito/:id', productController.carrito);


/*** EDITAR PRODUCTO ***/ 
router.get('/edicionProducto/:id',productController.edicion);
router.put('/edicionProducto/:id',productController.actualizar);

// - /products/:id (DELETE)    —> Acción de eliminación de un producto
    // FALTA REALIZAR!!!!!!!!!!!!!!!!


module.exports = router;







