module.exports = function (sequelize, Sequelize) {
    const Conseil = sequelize.define("conseil", {
        idConseil: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        demandePatient: {
            type: Sequelize.TEXT
        },
        reponseMedecin: {
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
        tableName: 'conseil',
        createdAt: false,
        updatedAt: false
    });

    Conseil.associate = (models) => {
        Conseil.hasOne(models.Patient, {
            foreignKey: 'idPatient',
        });
        Conseil.hasOne(models.Medecin, {
            foreignKey: 'idMedecin',
        });
    };

    return Conseil;
};