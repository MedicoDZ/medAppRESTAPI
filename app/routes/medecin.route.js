import medecinController from '../controllers/medecinController';
var medecinRouter = require("express").Router();

// Get all medecins
medecinRouter.get("/all", medecinController.findAllMedecin);

//Get by id
medecinRouter.get("/:id", medecinController.findMedecinById);


export default medecinRouter;