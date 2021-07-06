const db = require("../models");
const Conseil = db.conseil;
const Op = db.Sequelize.Op;

const demande = async (req, res) => {
    // Validate request
  if (!req.body.idPatient || !req.body.idMedecin || !req.body.demandePatient) {
    res.status(400).send({
      success:false,
      message: "manque d'infos!"
    });
    return;
  }

  try{
              const conseilToAdd = {
                demandePatient: req.body.demandePatient,
                idMedecin : req.body.idMedecin,
                idPatient : req.body.idPatient
              };
            
              Conseil.create(conseilToAdd)
                .then(data => {
                  res.status(200).send({
                    success: true,
                    msg: 'Le demande de conseil est enregistré.',
                  });
                })
                .catch(err => {
                  res.status(500).send({
                    message:
                      err.message || "Some error occurred while creating the conseil."
                  });
                });
        } catch (err) {
          res.status(500).send({
            message: err.message || "Some error occured while searching conseil "
          });
        }
      };  
       
 const getAll = async (req, res) => {
  const id = req.params.id;
  try{
  const data = await Conseil.findAll(
      {
          where: { idPatient: id }
      }
     )
      let dataToSend = []
      if (data != null && data.length != 0) {
      res.status(200).send(data)
      return;
      }  
      else {
        res.status(404).send(dataToSend)
        return;
      }
    }
    catch (err) {
      res.status(500).send({
        message: err.message || "Some error occured while searching conseils "
      });
    }
  };  

  const multipledemande = async (req, res) => {
  

  try{

    for(e in req.body){

        const conseilToAdd = {
            demandePatient: e.demandePatient,
            idMedecin : e.idMedecin,
            idPatient : e.idPatient
          };
        
          Conseil.create(conseilToAdd)
            .then()
            .catch(err => {
              res.status(404).send({
                  success:false,
                  msg: err.message || "Some error occurred while creating the conseil."
              });
            });
        }
        res.status(200).send({
            success:true,
            msg:"toutes les demandes sont enregistrés"
        })
              
        } catch (err) {
          res.status(500).send({
            message: err.message || "Some error occured while searching conseil "
          });
        }
      };  
       
export default {
  demande,
  getAll,
  multipledemande
  }