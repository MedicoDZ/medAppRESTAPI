const db = require("../models");
const Medicament = db.medicament;
const TraitMed = db.traitMed;

//Les médicaments d'un traitement
const findMedicamenstTraitement = async (req, res) => {
    const id = req.params.id;
    try{
        const data = await TraitMed.findAll({
            where: {
                idTraitement: +req.params.id,
            },
        });
        if (data.length === 0) {
            res.status(404).send({
                error: 'not_found',
                message: `Ce traitement ${+req.params.id} n'a aucun médicament : `,
                status: 404,
            });
        } else {
            res.send(data)
        }
     }
     catch(err){
        res.status(500).send({
          message: "Error retrieving medicaments of traitement with id=" + id
        });
      };
}

//medicament by id
const findOneMedicament = (req, res) => {
    const id = req.params.id;

    Medicament.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving medicament with id=" + id
        });
      });
};



export default {
    findMedicamenstTraitement,
    findOneMedicament
};