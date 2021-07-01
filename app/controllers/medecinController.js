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


export default {
    findAllMedecin
};