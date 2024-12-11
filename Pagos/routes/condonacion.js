const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const { 
    listarCondonaciones, 
    listarCondonacion, 
    registrarCondonacion,
    actualizarCondonacion} = require("../controllers/condonacion.Controller");


router.get("/", listarCondonaciones);

router.get("/:id", listarCondonacion);

router.post("/", 
    body("idServicio").isInt(),
    body("idCliente").isString(),
    body("detalle").isString(),
    body("fechaExpedicion").isString(),
    body("estatus").isString(),
    registrarCondonacion);

router.put("/", 
    body("idCondonacion").isInt(),
    body("idServicio").isInt(),
    body("idCliente").isString(),
    body("detalle").isString(),
    body("fechaExpedicion").isString(),
    body("estatus").isString(),
    actualizarCondonacion);

module.exports = router