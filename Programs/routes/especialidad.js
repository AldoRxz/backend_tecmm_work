const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
    listarEspecialidades, 
    registrarEspecialidad, 
    listarEspecialidad, 
    actualizarEspecialidad, 
    eliminarEspecialidad} = require("../controllers/especialidadController");


router.get("/", listarEspecialidades);

router.get("/:id", listarEspecialidad);

router.post("/", 
    body("idUnidad").isInt(),
    body("codigo").isString(),
    body("nombreCorto").isString(),
    body("nombre").isString(),
    body("creditos").isInt(),
    body("estatus").isBoolean(),
    registrarEspecialidad);

router.put("/",
    body("idEspecialidad").isInt(),
    body("idUnidad").isInt(),
    body("codigo").isString(),
    body("nombreCorto").isString(),
    body("nombre").isString(),
    body("creditos").isInt(),
    body("estatus").isBoolean(),
    actualizarEspecialidad);

router.delete("/:id", eliminarEspecialidad);

module.exports = router