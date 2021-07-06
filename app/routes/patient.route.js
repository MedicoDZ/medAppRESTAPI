import patientController from '../controllers/patientController';
var patientRouter = require("express").Router();

// Get all patients
patientRouter.get("/all", patientController.findAllPatient);

// Get one patient
patientRouter.get("/:id", patientController.findOnePatient);


export default patientRouter;