import medecinController from '../controllers/medecinController';
var medecinRouter = require("express").Router();

// Get all medecins
medecinRouter.get("/all", medecinController.findAllMedecin);


export default medecinRouter;