module.exports = function (sequelize, Sequelize) {
    const RendezVous = sequelize.define("rendezvous", {
        idRdv: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateRdv: {
            type: Sequelize.DATE,
            allowNull: false
        },
        heureRdv: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idMedecin: {
            type: Sequelize.INTEGER
        },
        idPatient: {
            type: Sequelize.INTEGER
        },
    }, {
        freezeTableName: true,
        tableName: 'rendezvous',
        createdAt: false,
        updatedAt: false
    });

    RendezVous.associate = (models) => {
        RendezVous.hasOne(models.Patient, {
            foreignKey: 'idPatient',
        });
        RendezVous.hasOne(models.Medecin, {
            foreignKey: 'idMedecin',
        });
    };

    return RendezVous;
};