import conseilCtrl from "../controllers/conseil.controller";

var router = require("express").Router();
    
// demande rdv
router.post("/demande", conseilCtrl.demande);


router.post("/multipledemande", conseilCtrl.multipledemande);

// get les conseils d'un patient
router.get("/patient/:id", conseilCtrl.getAll);


export default router;
