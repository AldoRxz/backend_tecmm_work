const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarExamenes, 
    registrarExamen, 
    actualizarExamen,
    eliminarExamen} = require("../controllers/examenController");


router.get("/", listarExamenes);

router.post("/", 
    body("nombre").isString(),
    registrarExamen);

router.put("/", 
    body("idExamen").isInt(),
    body("nombre").isString(),
    actualizarExamen);

router.delete("/:id", eliminarExamen);


module.exports = router