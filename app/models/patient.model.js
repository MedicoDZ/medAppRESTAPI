module.exports = function (sequelize, Sequelize) {
    const Patient = sequelize.define("patient", {
        idPatient: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        telephonePatient: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        passwordPatient: {
            type: Sequelize.STRING,
            allowNull: false
        },
        emailPatient: {
            type: Sequelize.STRING
        },
        photoPatient: {
            type: Sequelize.STRING
        },
        nomPatient: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenomPatient: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        freezeTableName: true,
        tableName: 'patient',
        createdAt: false,
        updatedAt: false
    });

    Patient.associate = function (modals) {
        Patient.hasMany(modals.RendezVous, {
            foreignKey: 'idPatient',
        });
        Patient.hasMany(modals.Conseil, {
            foreignKey: 'idPatient',
        });
        Patient.hasMany(modals.Traitement, {
            foreignKey: 'idPatient',
        });
    };

    return Patient;
};