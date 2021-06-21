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
    }  
};

module.exports = usersController; 