import conseilCtrl from "../controllers/conseil.controller";

var router = require("express").Router();
    
// demande rdv
router.post("/demande", conseilCtrl.demande);

// get les conseils d'un patient
router.get("/patient/:id", conseilCtrl.getAll);


export default router;
