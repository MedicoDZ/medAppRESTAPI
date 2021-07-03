
import authCtrl from "../controllers/auth.controller";

var router = require("express").Router();
    
// auth patient
router.post("/patient", authCtrl.authPatient);

// auth patient
//router.post("/medecin", authCtrl.authMedecin);


export default router;
