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

        let idProducto = req.params.id;
        for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var packB = products[i];
			}
            
		}
    //res.send(packB);
    res.render ('products/carrito', {packBuscado:packB});
    },
    carga: (req,res) => {     //create
        res.render ('products/cargaProducto');
    },

    edicion:  (req,res) => {
    
        let idProductoEditado = req.params;	
        for(let i=0;i<products.length;i++){
            if (products[i].id==idProductoEditado.id){
                var productoEncontrado = products[i];
            break  
            }  
        }  
        res.render('products/edicionProducto',{productoEncontrado: productoEncontrado});
    },

    actualizar: (req,res) => {     
        let idParaCambiar = req.params.id;
        let ProductoAModificar = req.body;    
		for(let i=0;i<products.length;i++){
	        if (products[i].id == idParaCambiar){
		  	    products[i].numeroDePack = ProductoAModificar.numeroDePack;
		  	    products[i].radio = ProductoAModificar.radio;
                products[i].superficie = ProductoAModificar.superficie;
                products[i].precio = ProductoAModificar.precio;
                products[i].superficie = ProductoAModificar.superficie;
                if (req.file == null){
                        products[i].imagen = products[i].imagen;
                    }else {
                        products[i].imagen =req.file.filename;
                    }
        		// var productoActualizado = products[i];
		        break;  
            }       
        }
		 fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		 res.render('products/producto', {products:products,users:users})
   
        },

    store: (req, res) => {
        if (req.file == null){
           var nombreImagen = 'avatar.jpg'
        }else {
            var nombreImagen = req.file.filename
        }
       
		let idNuevo = products[products.length-1].id + 1;
		let nuevoObjeto =  Object.assign({id: idNuevo},req.body,{imagen:nombreImagen});
		products.push(nuevoObjeto);
   	    fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
            res.render('products/producto', {products:products,users:users})
	},

    destroy : (req, res) => {

		let idProducto = req.params.id;	
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var nombreImagen=products[i].imagen;
				products.splice(i,1);
				break;
			}
		}
		
	    fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		fs.unlinkSync(path.join(__dirname,'../../public/img/camiones/'+nombreImagen));
		res.render('index');
		}

};

module.exports = productController; 
