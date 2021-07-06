const db = require("../models");
const Patient = db.patient;

// Retrieve all patients from the database.
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

// Just one patient
const findOnePatient = (req, res) => {
    const id = req.params.id;

    Patient.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving patient with id=" + id
        });
      });
};


export default {
    findAllPatient,
    findOnePatient
};