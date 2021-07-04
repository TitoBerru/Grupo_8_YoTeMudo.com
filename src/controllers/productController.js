const fs = require ('fs');
const path = require ('path');

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
        res.render ('products/carrito');
    },
    carga: (req,res) => {     //create
        res.render ('products/cargaProducto');
    },
    edicion:  (req,res) => {
        res.render ('products/edicionProducto');
    }
};

module.exports = productController; 
