const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarMedicos, 
    registrarMedico } = require("../controllers/medicoController");


router.get("/", listarMedicos);

router.post("/", 
    body("idAspirante").isString(),
    body("idTipoSeguro").isInt(),
    body("numeroSeguro").isString(),
    body("numeroClinica").isString(),
    body("contactoEmergencia").isString(),
    body("tutor").isString(),
    body("telefonoTutor").isString(),
    body("paisTutor").isString(),
    body("estadoTutor").isString(),
    body("municipioTutor").isString(),
    body("coloniaTutor").isString(),
    body("direccionTutor").isString(),
    registrarMedico);


module.exports = router