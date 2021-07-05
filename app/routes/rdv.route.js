import rdvRoute from "../controllers/rdv.controller";

var router = require("express").Router();
    
// demande rdv
router.post("/demande", rdvRoute.demande);

// get les rdv d'un patient
//router.get("/patient/:id", rdvRoute.getAll);


export default router;
