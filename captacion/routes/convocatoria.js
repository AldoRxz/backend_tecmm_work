const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarConvocatorias, 
    registrarConvocatorias, 
    actualizarConvocatoria,
    eliminarConvocatoria,
    listarConvocatoria} = require("../controllers/convocatoriaController");


router.get("/", listarConvocatorias);

router.get("/:id", listarConvocatoria);

router.post("/", 
    body("idExamen").isInt(),
    body("idOferta").isInt(),
    body("idPeriodo").isInt(),
    body("fechaInicio").isString(),
    body("fechaFin").isString(),
    body("fechaPagoExamen").isString(),
    body("fechaPagoInscripcion").isString(),
    body("fechaExamen").isString(),
    body("estatus").isString(),
    registrarConvocatorias);

router.put("/",
    body("idConvocatoria").isInt(),
    body("idExamen").isInt(),
    body("idOferta").isInt(),
    body("idPeriodo").isInt(),
    body("fechaInicio").isString(),
    body("fechaFin").isString(),
    body("fechaPagoExamen").isString(),
    body("fechaPagoInscripcion").isString(),
    body("fechaExamen").isString(),
    body("estatus").isString(),
    actualizarConvocatoria);

router.delete("/:id", eliminarConvocatoria);

module.exports = router