const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../dataBase/usersDb.json');
const totalUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login: (req,res) => {
       res.render ('users/login');
    },

    accesoAdmin: (req,res)=>{
        // res.render('users/profileAdmin')
        // logica: si el pass es correcto , 
        // validar si el usuario es admin
        // y ahi renderizas una pagina u otra y listo!


        let profileUserIngresado = req.body.usuario
        
        for (let i=0; i<totalUsers.length; i++){
        if(totalUsers[i].usuario== profileUserIngresado && profileUserIngresado == "admin"){
        //     res.render ('users/profileAdmin')


        
        // }else{
            res.send (req.body);
        //     }
        // }
    },

    registro: (req,res) => {
        res.render ('users/registro');
    },
    profileAdmin: (req,res) => {
        res.render ('/profileAdmin');
    },
    profileUser: (req,res) => {
        res.render ('users/profileUser');
    },
    // accesoAdmin: (req,res)=>{
    //     let userIngresado = req.body
    //     for (let i=0; i<totalUsers.length; i++){
    //         res.send(totalUsers[i].nombre)
    //     //     if (users[i].nombre === userIngresado.nombre){
    //     //     res.send ('logueo exitoso');
    //     //     break
    //     //     }   else{
    //     //    res.send (users.length);
    //     //    }
    //     //    break
    //     }   
        // res.send(users[1].nombre)
     
// }
};

module.exports = usersController; 