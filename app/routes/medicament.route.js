import medicamentController from '../controllers/medicamentController';
var medicamentRouter = require("express").Router();

// Get medicament by id
medicamentRouter.get("/:id", medicamentController.findOneMedicament);

// Get all medicaments of a traitement
medicamentRouter.get("/traitement/:id", medicamentController.findMedicamenstTraitement);

export default medicamentRouter;