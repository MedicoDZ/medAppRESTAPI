module.exports = function (sequelize, Sequelize) {
    const Medecin = sequelize.define("medecin", {
        idMedecin: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telephoneMedecin: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        passwordMedecin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        emailMedecin: {
            type: Sequelize.STRING
        },
        photoMedecin: {
            type: Sequelize.STRING
        },
        nomMedecin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenomMedecin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        specialiteMedecin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cabinetMedecinLongitude: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        cabinetMedecinLatitude: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
    }, {
        freezeTableName: true,
        tableName: 'medecin',
        createdAt: false,
        updatedAt: false
    });

    Medecin.associate = function (modals) {
        Medecin.hasMany(modals.RendezVous, {
            foreignKey: 'idMedecin',
        });
        Medecin.hasMany(modals.Conseil, {
            foreignKey: 'idMedecin',
        });
        Medecin.hasMany(modals.Traitement, {
            foreignKey: 'idMedecin',
        });
    };

    return Medecin;
};