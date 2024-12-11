const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
    listarModalidades, 
    listarModalidad,
    registrarModalidad,
    actualizarModalidad,
    eliminarModalidad } = require("../controllers/modalidadController");


router.get("/", listarModalidades);

router.get("/:id", listarModalidad);

router.post("/", 
    body("nombre").isString(), 
    registrarModalidad);

router.put("/",
    body("idModalidad").isNumeric(),
    body("nombre").isString(),
    actualizarModalidad);

router.delete("/:id", eliminarModalidad);

module.exports = router