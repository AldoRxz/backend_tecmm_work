const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarGenero, 
    registrarGenero, 
    actualizarGenero,
    eliminarGenero} = require("../controllers/generosController");


router.get("/", listarGenero);

router.post("/", 
    body("genero").isString(),
    registrarGenero);

router.put("/", 
    body("idGenero").isInt(),
    body("genero").isString(),
    actualizarGenero);

router.delete("/:id", eliminarGenero);


module.exports = router