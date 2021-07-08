const express = require('express');
const path = require ('path');
const methodOverride =  require('method-override');

const app = express();

// ****** Middlewares *******

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Necesario para trabajar archivos JSON
app.use(methodOverride('_method')); // necesario para transformar los POST en PUT Y DELETE




// *** Config de Vistas ***
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

// ** RUTAS ** 
const mainRoutes = require ('./routes/mainRoutes');
const productRoutes = require ('./routes/productRoutes');

app.use('/',mainRoutes);
app.use('/products',productRoutes);

app.listen((3500), () => {
    console.log('Servidor corriendo en el puerto 3500');
});




