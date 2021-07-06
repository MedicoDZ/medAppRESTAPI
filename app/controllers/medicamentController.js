const db = require("../models");
const Medicament = db.medicament;
const TraitMed = db.traitMed;

//Les médicaments d'un traitement
/*const findMedicamentTraitement = (req, res) => {
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
            data.array.forEach(element => {
                const dataF = await Medicament.findAll({
                    where: {
                        idMedicament: +
                    },
                });

            });
        }
     }
     catch(err){
        res.status(500).send({
          message: "Error retrieving Patient with id=" + id
        });
      };
}



export default {
    findAllTraitements,
    findTraitementsPatient
};*/