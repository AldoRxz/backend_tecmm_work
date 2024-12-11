const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarProgramas, 
    registrarPrograma, 
    eliminarPrograma, 
    listarPrograma, 
    actualizarPrograma } = require("../controllers/programaController");



router.get("/", listarProgramas);

router.get("/:id", listarPrograma);

router.post("/", 
    body("idCarrera").isInt(),
    body("idModalidad").isInt(),
    body("idUnidad").isInt(),
    body("estatus").isBoolean(),
    registrarPrograma);
 
router.put("/",
    body("idPrograma").isInt(),
    body("idCarrera").isInt(),
    body("idModalidad").isInt(),
    body("idUnidad").isInt(),
    body("estatus").isBoolean(),
    actualizarPrograma);       

router.delete("/:id", eliminarPrograma);


module.exports = router