const fs = require ('fs');
const path = require ('path');
const { send } = require('process');

const productsFilePath = path.join(__dirname, '../dataBase/productsDb.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userFilePath = path.join(__dirname, '../dataBase/usersDb.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const productController = {
    
    //Para mostrar todo el listado de productos

    listado: (req,res) => {
      res.render ('products/producto',{products:products,users:users});
    },

    //Para mostrar el detalle de uno de los productos 
    // producto: (req,res) => {
    //     res.render ('products/producto');
    // },

    carrito: (req,res) => {
        let idPack = req.params.id -1;
        let packBuscado = products[idPack]
       
       res.render ('products/carrito', {packBuscado:packBuscado});
    },
    carga: (req,res) => {     //create
        res.render ('products/cargaProducto');
    },

    edicion:  (req,res) => {
        // Configuro por ahora al pack fijo 1, para que tome los valores al venir del admin
        // si bien seria suficiente con dejar el valor fijo, corro el if para mas adelante...
        let idProductoEditado = req.params;	
        if (idProductoEditado != undefined){
            idProductoEditado.id = 1;
        for(let i=0;i<products.length;i++){
            if (products[i].id==idProductoEditado.id){
                var productoEncontrado = products[i];
            break
            }
        }  }  
        res.render('products/edicionProducto',{productoAModificar: productoEncontrado});  // puedo llamar a products como productoPorModificar y cambiarlo en edicionProducto?
    },

    actualizar: (req,res) => {
        let packACambiar = req.body.nombre;
        let valoresNuevos = req.body;

		for(let i=0;i<products.length;i++){
	        if (products[i].nombre==packACambiar.nombre){

				products[i].nombre = valoresNuevos.nombre;
				products[i].radio = valoresNuevos.radio;
                products[i].superficie = valoresNuevos.superficie;
			    products[i].precio = valoresNuevos.precio;
                // products[i].descripcion = valoresNuevos.descripcion;
			    //products[i].imagen = valoresNuevos.imagen;

			// var productoActualizado = products[i];

				break;
	 	    }
	    }

		 fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
        res.render('index')
	// 	res.render('index',{products: productoActualizado})  confirmar si renderizamos esta vista
    //  res.send(req.body)
    },

    store: (req, res) => {
        let nombreImagen=req.file.filename;
		let idNuevo = products[products.length-1].id + 1;
		let nuevoObjeto =  Object.assign({id: idNuevo},req.body,{imagen:nombreImagen});
		products.push(nuevoObjeto);
   	    fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		res.render('index');
	},
};

module.exports = productController; 
