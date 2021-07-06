import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './models/index.js'
import medecinRouter from './routes/medecin.route'
import patientRouter from './routes/patient.route'
import authRouter from './routes/auth.route'
import rdvRouter from './routes/rdv.route'
import conseilRouter from './routes/conseil.route'
import specialiteRouter from './routes/specialite.route'


dotenv.config()
const app = express();


// Cross Origin Resources Sharing, Initially all whitelisted
app.use(cors());

// Parse data in JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.sequelize.sync();

//medecin route
app.use('/api/medecins', medecinRouter);

//patient route
app.use('/api/patients', patientRouter);

//specialite route
app.use('/api/specialites', specialiteRouter);

//auth route
app.use('/api/auth', authRouter);

//rendez-vous route
app.use('/api/rdv', rdvRouter);

//conseil route
app.use('/api/conseil', conseilRouter);

//Home
app.use((req, res) => {
    res.send("<h1>Medico-dz REST API</h1>");

});


module.exports = app;