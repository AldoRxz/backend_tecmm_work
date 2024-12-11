const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarHistorial, 
    registrarHistorial } = require("../controllers/historialEtapaController");


router.get("/:id", listarHistorial);

router.post("/", 
    body("idAspirante").isString(),
    body("idEtapa").isInt(),
    body("fecha").isString(),
    registrarHistorial);



module.exports = router