const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarOfertas, 
    listarOferta, 
    registrarOferta,
    eliminarOferta,
    actualizarOferta} = require("../controllers/ofertaController");


router.get("/", listarOfertas);

router.get("/:id", listarOferta);

router.post("/", 
    body("nombre").isString(),
    body("version").isString(),
    body("estatus").isBoolean(),
    registrarOferta);

router.put("/", 
    body("idOferta").isNumeric(),
    body("nombre").isString(),
    body("version").isString(),
    body("estatus").isBoolean(),
    actualizarOferta);

router.delete("/:id", eliminarOferta);


module.exports = router