const db = require("../models");
const Medecin = db.medecin;

// Retrieve all medecins from the database.
const findAllMedecin = (req, res) => {
    Medecin.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving medecins."
            });
        });
};

// Get medecin by id
const  findMedecinById = async (req, res) => {
    const id = req.params.id;
    try{
        const data = await Medecin.findAll({
            where: {
                idMedecin: +req.params.id,
            },
        });
        if (data.length === 0) {
        
            res.status(404).send({
                error: 'not_found',
                message: `Ce medecin ${+req.params.id} n'existe pas : `,
                status: 404,
            });
        } else {
            res.send(data);
        }
     }
     catch(err){
        res.status(500).send({
          message: "Error retrieving medecin with id=" + id
        });
      };
}


export default {
    findAllMedecin,
    findMedecinById
};