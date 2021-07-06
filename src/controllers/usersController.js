const usersController = {
    login: (req,res) => {
       res.render ('users/login');
    },

    registro: (req,res) => {
        res.render ('users/registro');
    },
    profileAdmin: (req,res) => {
        res.render ('users/profileAdmin');
    },
    profileUser: (req,res) => {
        res.render ('users/profileUser');
    },
    accesoAdmin: (req,res)=>{
        // res.render('users/profileAdmin')

        // let profileUserIngresado = req.body.profile
        // for (let i=0; i<users.length; i++){
        // if(users[i].profile== profileUserIngresado && profileUserIngresado == "admin"){
        //     res.render ('users/profileAdmin')
        // }else{
        //     res.render ('index');
        //     }
        // }
        res.send(req.body)
    },  
};

module.exports = usersController; 