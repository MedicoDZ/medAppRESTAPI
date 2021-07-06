const db = require("../models");
const Traitement = db.traitement;

// Retrieve all patients from the database.
const findAllTraitements = (req, res) => {
    Traitement.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving traitements."
            });
        });
};

//Les traitements d'un patient
const  findTraitementsPatient = async (req, res) => {
    const id = req.params.id;
    try{
        const data = await Traitement.findAll({
            where: {
                idPatient: +req.params.id,
            },
        });
        if (data.length === 0) {
        
            res.status(404).send({
                error: 'not_found',
                message: `Ce patient ${+req.params.id} n'a aucun traitement : `,
                status: 404,
            });
        } else {
            res.send(data);
        }
     }
     catch(err){
        res.status(500).send({
          message: "Error retrieving Patient with id=" + id
        });
      };
}



export default {
    findAllTraitements,
    findTraitementsPatient
};