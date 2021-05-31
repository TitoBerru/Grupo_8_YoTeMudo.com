const express = require('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');
app.use( express.static(publicPath));

app.listen((3000), () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});
app.get('/carrito.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/carrito.html'));
});
app.get('/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
app.get('/producto.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/producto.html'));
});
app.get('/registro.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));
});
app.get('/home.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});
