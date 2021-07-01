const db = require("../models");
const Patient = db.patient;

// Retrieve all medecins from the database.
const findAllPatient = (req, res) => {
    Patient.findAll()
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
    findAllPatient
};