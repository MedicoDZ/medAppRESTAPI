module.exports = function (sequelize, Sequelize) {
    const Medicament = sequelize.define("medicament", {
        idMedicament: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomMedicament: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //Anti-inflammatoire, Anestésie, Allergologie, etc.
        typeMedicament: {
            type: Sequelize.STRING
        },
        //voie orale, nasale, etc.
        priseMedicament: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        tableName: 'medicament',
        createdAt: false,
        updatedAt: false
    });

    return Medicament;
};