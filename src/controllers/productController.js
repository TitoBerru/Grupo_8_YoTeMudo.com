const productController = {
    producto: (req,res) => {
        res.render ('products/producto');
    },
    carrito: (req,res) => {
        res.render ('products/carrito');
    },
    carga: (req,res) => {
        res.render ('products/cargaProducto');
    },
    edicion:  (req,res) => {
        res.render ('products/edicionProducto');
    }
};

module.exports = productController; 
