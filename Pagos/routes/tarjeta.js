const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarTarjeta, 
    registrarTarjeta, 
    eliminarTarjeta } = require("../controllers/tarjetaController");


router.get("/:id", listarTarjeta);

router.post("/", 
    body("idCliente").isString(),
    body("nombre").isString(),
    body("correo").isString(),
    body("bin").isString(),
    body("token").isString(),
    body("anioExpiracion").isString(),
    body("mesExpiracion").isString(),
    body("tipo").isString(),
    body("terminacion").isString(),
    registrarTarjeta);

router.delete("/:id", eliminarTarjeta);


module.exports = router