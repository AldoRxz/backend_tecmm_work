const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
    listarCarreras, 
    registrarCarrera, 
    actualizarCarrera, 
    eliminarCarrera} = require("../controllers/carreraController");

router.get("/", listarCarreras);

router.post("/", 
    body("nombre").isString(),
    body("nombreCorto").isString(),
    registrarCarrera);

router.put("/",
    body("idCarrera").isNumeric(),
    body("nombre").isString(),
    body("nombreCorto").isString(),
    actualizarCarrera);

router.delete("/:id", eliminarCarrera);

module.exports = router