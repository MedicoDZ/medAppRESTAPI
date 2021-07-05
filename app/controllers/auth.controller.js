const db = require("../models");
const Patient = db.patient;
const Medecin = db.medecin;
const Op = db.Sequelize.Op;

const authPatient = async (req, res) => {
    // Validate request
  if (!req.body.tel || !req.body.mdp) {
    res.status(400).send({
      message: "tel and pwd can not be empty!"
    });
    return;
  }

  try{
    const patientO = await Patient.findOne({
        where: {
            telephonePatient: req.body.tel
        }
      });
      if(patientO){
        if(patientO.passwordPatient==req.body.mdp){
            res.status(200).send({
                success: true,
                id: patientO.idPatient,
                msg: 'Patient est authentifié.',
              });
            } else {
              res.status(401).send({
                success: false,
                id: -1,
                msg: 'mot de passe érroné.',
              });
            }
          } else {
            res.status(401).send({
                success: false,
                id: -1,
                msg: 'Compte n\'existe pas !',
            });
          }
        } catch (err) {
          res.status(500).send({
            message: err.message || "Some error occured while searching patient "
          });
        }  
};

export default {
    authPatient
  }