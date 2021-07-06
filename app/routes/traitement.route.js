import traitementController from '../controllers/traitement.controller';
var traitementRouter = require("express").Router();

// Get all traitements
traitementRouter.get("/all", traitementController.findAllTraitements);

// Get traitements of a patient
traitementRouter.get("/patient/:id", traitementController.findTraitementsPatient);

export default traitementRouter;