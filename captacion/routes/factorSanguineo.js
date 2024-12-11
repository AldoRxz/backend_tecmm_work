const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { 
    listarFactorSanguineos, 
    registrarFactorSanguineo, 
    actualizarFactorSanguineo,
    eliminarFactorSanguineo} = require("../controllers/factorSanguineoController");


router.get("/", listarFactorSanguineos);

router.post("/", 
    body("factor").isString(),
    registrarFactorSanguineo);

router.put("/", 
    body("idFactorSanguineo").isInt(),
    body("factor").isString(),
    actualizarFactorSanguineo);

router.delete("/:id", eliminarFactorSanguineo);


module.exports = router