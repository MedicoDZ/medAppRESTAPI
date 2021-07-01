import patientController from '../controllers/patientController';
var patientRouter = require("express").Router();

// Get all medecins
patientRouter.get("/all", patientController.findAllPatient);


export default patientRouter;