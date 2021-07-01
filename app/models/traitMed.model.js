//relation issue de l'association "possède" liant les entités traitement et médicament
module.exports = function (sequelize, Sequelize) {
    const TraitMed = sequelize.define("traitmed", {
        idMedicament: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        idTraitement: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        //Exemple : Deux fois par jour pendant 15 jours, une fois le matin à jeun et une fois après dîner
        detailsAdministration: {
            type: Sequelize.TEXT
        },
    }, {
        freezeTableName: true,
        tableName: 'traitmed',
        createdAt: false,
        updatedAt: false
    });

    return TraitMed;
};