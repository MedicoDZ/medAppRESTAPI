module.exports = function (sequelize, Sequelize) {
    const Traitement = sequelize.define("traitement", {
        idTraitement: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateDebutTraitement: {
            type: Sequelize.DATE,
            allowNull: false
        },
        //En jours
        dureeTraitement: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        remarquesTraitement: {
            type: Sequelize.TEXT
        },
        idMedecin: {
            type: Sequelize.INTEGER
        },
        idPatient: {
            type: Sequelize.INTEGER
        },
    }, {
        freezeTableName: true,
        tableName: 'traitement',
        createdAt: false,
        updatedAt: false
    });

    Traitement.associate = (models) => {
        Traitement.hasOne(models.Patient, {
            foreignKey: 'idPatient',
        });
        Traitement.hasOne(models.Medecin, {
            foreignKey: 'idMedecin',
        });
    };

    return Traitement;
};