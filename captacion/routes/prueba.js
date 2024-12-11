const express = require('express');
const router = express.Router();

const {prueba} = require("../controllers/pruebaController");

const validarToken = require("../middlewares/validarToken");

router.get('/', validarToken, prueba);

module.exports = router