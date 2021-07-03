module.exports = function (sequelize, Sequelize) {
    const Specialite = sequelize.define("specialite", {
        idSpecialite: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomSpecialite: {
            type: Sequelize.STRING,
            allowNull: false
        },
        iconeSpecialite: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        tableName: 'specialite',
        createdAt: false,
        updatedAt: false
    });

    Specialite.associate = function (modals) {
        Specialite.hasMany(modals.Medecin, {
            foreignKey: 'idSpecialite',
        });
    };
    return Specialite;
};