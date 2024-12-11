const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarAspirantes, 
    registrarAspirante, 
    actualizarAspirante,
    listarAspirante} = require("../controllers/aspiranteController");


router.get("/", listarAspirantes);

router.get("/:id", listarAspirante);

router.post("/", 
    body("idAspirante").isString(),
    body("idFactorSanguineo").isInt(),
    body("idGenero").isInt(),
    body("idConvocatoria").isInt(),
    body("nombre").isString(),
    body("primerApellido").isString(),
    body("segundoApellido").isString(),
    body("telefonoCelular").isString(),
    body("correo").isString(),
    body("curp").isString(),
    body("paisNacimiento").isString(),
    body("estadoNacimiento").isString(),
    body("municipioNacimiento").isString(),
    body("fechaNacimiento").isString(),
    registrarAspirante);

router.put("/", 
    body("idAspirante").isString(),
    body("idFactorSanguineo").isInt(),
    body("idGenero").isInt(),
    body("idConvocatoria").isInt(),
    body("nombre").isString(),
    body("primerApellido").isString(),
    body("segundoApellido").isString(),
    body("telefonoCelular").isString(),
    body("correo").isString(),
    body("curp").isString(),
    body("paisNacimiento").isString(),
    body("estadoNacimiento").isString(),
    body("municipioNacimiento").isString(),
    body("fechaNacimiento").isString(),
    actualizarAspirante);


module.exports = router