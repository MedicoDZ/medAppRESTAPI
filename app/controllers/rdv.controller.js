const db = require("../models");
const Rdv = db.rendezVous;
const Patient = db.patient;
const Medecin = db.medecin;
const Specialite = db.specialite;
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
       
 const getAll = async (req, res) => {
  const id = req.params.id;
  try{
  const data = await Rdv.findAll(
      {
          where: { idPatient: id }
      }
     )
      let dataToSend = []
      if (data != null && data.length != 0) {
       for(const element of data) {
        let p = await Patient.findOne({ where: {
          idPatient : element.idPatient
        }})
        let m = await Medecin.findOne({ where: {
          idMedecin : element.idMedecin
        }})
        let s = await Specialite.findOne({ where: {
          idSpecialite : m.idSpecialite
        }})
        let str =  String(require('moment')(element.dateRdv).format('YYYY-MM-DD'))
        let el = {
          nomMedecin : m.nomMedecin +" "+ m.prenomMedecin,
          nomPatient : p.nomPatient +" "+ p.prenomPatient,
          specMedecin : s.nomSpecialite,
          heure : element.heureRdv,
          date : str,//.substring(str.length - 12, str.length),
          prix : "2000"
        };
        dataToSend.push(el)
      }
      res.status(200).send(dataToSend)
      return;
      }  
      else {
  
        res.status(404).send(dataToSend)
        return;
      }
    }
    catch (err) {
      res.status(500).send({
        message: err.message || "Some error occured while searching Rdv "
      });
    }
  };  


export default {
  demande,
  getAll
  }