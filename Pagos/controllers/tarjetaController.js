const pool = require("../config/mariadb");

const {return_error} = require('../helpers/returnError');
const {validationResult} = require('express-validator');


const listarTarjeta = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { id } = req.params;

    pool.getConnection().then(async (conn) => {
        const resultado = await 
        conn.query("CALL listarTarjeta(?)", id);
        conn.end();

        return res.status(200).json(resultado[0]);
    });
}


const registrarTarjeta = async (req, res) => {
    const validation_errors = validationResult(req);
	   if (!validation_errors.isEmpty()) {
		       const response = return_error(406, 'Datos con formato incorrecto');
	           return res.status(400).json(response);
	    }

    const { idCliente, nombre, correo, bin, token, anioExpiracion, mesExpiracion, tipo, terminacion } = req.body;

    pool.getConnection().then(async (conn) => {
        const arreglo = [idCliente, nombre, correo, bin, token, anioExpiracion, mesExpiracion, tipo, terminacion];
        const tarjetaRegistrada = await 
        conn.query("CALL registrarTarjeta(?, ?, ?, ?, ?, ?, ?, ?, ?)", arreglo);
        conn.end();

        return res.status(200).json(tarjetaRegistrada[0][0]);
    });
}


const eliminarTarjeta = async (req, res) => {
    const {id} = req.params;

    pool.getConnection().then(async (conn) => {
        const tarjetaEliminada = await conn.query("CALL eliminarTarjeta(?)", id);
        conn.end();
        return res.status(200).json(tarjetaEliminada[0][0]);
    });
}


module.exports = {listarTarjeta, registrarTarjeta, eliminarTarjeta}