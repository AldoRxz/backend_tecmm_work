const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarProrrogas, 
    registrarProrroga, 
    listarProrrogaCliente,
    actualizarProrroga} = require("../controllers/prorrogaController");


router.get("/", listarProrrogas);

router.get("/:id", listarProrrogaCliente);

router.post("/", 
    body("idServicio").isInt(),
    body("idCliente").isString(),
    body("detalle").isString(),
    body("fechaExpedicion").isString(),
    body("fechaVencimiento").isString(),
    registrarProrroga);

router.put("/", 
    body("idProrroga").isInt(),
    body("idServicio").isInt(),
    body("idCliente").isString(),
    body("detalle").isString(),
    body("fechaExpedicion").isString(),
    body("fechaVencimiento").isString(),
    actualizarProrroga);

module.exports = router