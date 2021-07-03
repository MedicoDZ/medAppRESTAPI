import { Sequelize } from "sequelize";
import dbConfig from "../../config/config";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    sync: true
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//To test the database connection 
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.medecin = require("./medecin.model")(sequelize, Sequelize);
db.patient = require("./patient.model")(sequelize, Sequelize);
db.specialite = require("./specialite.model")(sequelize, Sequelize);
db.conseil = require("./conseil.model")(sequelize, Sequelize);
db.medicament = require("./medicament.model")(sequelize, Sequelize);
db.rendezVous = require("./rendezVous.model")(sequelize, Sequelize);
db.traitement = require("./traitement.model")(sequelize, Sequelize);
db.traitMed = require("./traitMed.model")(sequelize, Sequelize);


module.exports = db;
