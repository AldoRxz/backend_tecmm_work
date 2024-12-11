const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarCuentas, 
    registrarCuenta, 
    listarCuenta,
    actualizarCuenta,
    eliminarCuenta} = require("../controllers/cuentaController");


router.get("/", listarCuentas);

router.get("/:id", listarCuenta);

router.post("/", 
    body("banco").isString(),
    body("convenio").isString(),
    body("claveBancaria").isString(),
    registrarCuenta);

router.put("/", 
    body("idCuenta").isInt(),
    body("banco").isString(),
    body("convenio").isString(),
    body("claveBancaria").isString(),
    actualizarCuenta);

router.delete("/:id", eliminarCuenta);


module.exports = router