const db = require("../models");
const Specialite = db.specialite;

// Retrieve all specialités from the database.
const findAllSpecialite = (req, res) => {
    Specialite.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving specialités."
            });
        });
};


export default {
    findAllSpecialite
};