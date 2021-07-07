const mainController = {
    index: (req,res) => {
       res.render ('index');
    },

    quienesSomos: (req,res) => {
        res.render ('aboutUs/quienesSomos');
       
     }

};

module.exports = mainController; 
