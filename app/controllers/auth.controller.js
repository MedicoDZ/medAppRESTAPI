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
                nomPatient: patientO.nomPatient+' '+patientO.prenomPatient
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

const authMedecin = async (req, res) => {
  // Validate request
if (!req.body.tel || !req.body.mdp) {
  res.status(400).send({
    message: "tel and pwd can not be empty!"
  });
  return;
}

try{
  const medecinO = await Medecin.findOne({
      where: {
          telephoneMedecin: req.body.tel
      }
    });
    if(medecinO){
      if(medecinO.passwordMedecin==req.body.mdp){
          res.status(200).send({
              success: true,
              id: medecinO.idMedecin,
              msg: 'Medecin est authentifié.',
              nomMedecin: medecinO.nomMedecin+' '+medecinO.prenomMedecin
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
          message: err.message || "Some error occured while searching Medecin "
        });
      }  
};


export default {
    authPatient,
    authMedecin
  }