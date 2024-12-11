const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarEtapas, 
    registrarEtapa, 
    actualizarEtapa,
    eliminarEtapa} = require("../controllers/etapaController");


router.get("/", listarEtapas);

router.post("/", 
    body("nombre").isString(),
    registrarEtapa);
    
router.put("/", 
    body("idEtapa").isInt(),
    body("nombre").isString(),
   actualizarEtapa);

router.delete("/:id", eliminarEtapa);


module.exports = router