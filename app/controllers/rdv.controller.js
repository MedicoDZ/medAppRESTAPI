const db = require("../models");
const Rdv = db.rendezVous;
const Op = db.Sequelize.Op;

const demande = async (req, res) => {
    // Validate request
  if (!req.body.idPatient || !req.body.idMedecin || !req.body.dateRdv || !req.body.heureRdv) {
    res.status(400).send({
      success:false,
      message: "manque d'infos!"
    });
    return;
  }

  try{
    const rdvO = await Rdv.findOne({
        where: {
          idMedecin : req.body.idMedecin,
          dateRdv: req.body.dateRdv+" 00:00:00+00",
          heureRdv: req.body.heureRdv
        }
      });
      if(rdvO){
            res.status(404).send({
                success: false,
                msg: 'Le medecin ne sera pas disponible le '+req.body.dateRdv+' à '+req.body.heureRdv,
              });
            } 
      else {

              const rdvToAdd = {
                dateRdv: req.body.dateRdv,
                heureRdv: req.body.heureRdv,
                idMedecin : req.body.idMedecin,
                idPatient : req.body.idPatient
              };
            
              // Save Apprenant in the database
              Rdv.create(rdvToAdd)
                .then(data => {
                  res.status(200).send({
                    success: true,
                    msg: 'Le rendez-vous est pris avec success.',
                  });
                })
                .catch(err => {
                  res.status(500).send({
                    message:
                      err.message || "Some error occurred while creating the RDV."
                  });
                });
            }
        } catch (err) {
          res.status(500).send({
            message: err.message || "Some error occured while searching Rdv "
          });
        }  
};

export default {
  demande
  }