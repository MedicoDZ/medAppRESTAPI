import specialiteController from '../controllers/specialiteController';
var specialiteRouter = require("express").Router();

// Get all medecins
specialiteRouter.get("/all", specialiteController.findAllSpecialite);


export default specialiteRouter;