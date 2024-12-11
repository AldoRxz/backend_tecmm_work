const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarBitacoras, 
    registrarBitacora, 
    eliminarBitacora } = require("../controllers/bitacoraController");


router.get("/", listarBitacoras);

router.post("/", 
    body("referencia").isString(),
    body("monto").isFloat(),
    body("fecha").isString(),
    body("estatus").isBoolean(),
    registrarBitacora);

router.delete("/:id", eliminarBitacora);


module.exports = router